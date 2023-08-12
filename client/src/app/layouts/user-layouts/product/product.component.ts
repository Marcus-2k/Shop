import { Component, OnInit } from "@angular/core";

import { Product } from "src/app/shared/interface/interfaces";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { OpenSnackBarService } from "src/app/shared/service/open-snack-bar.service";

import { Store } from "@ngrx/store";
import { UserProductActions } from "src/app/store/product/product.action";
import { UserProductSelector } from "src/app/store/product/product.selector";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PAGE_SIZE_OPTIONS } from "src/app/shared/constants/page-size-options";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  public constructor(
    private requestProduct: RequestProductService,
    private showMessage: OpenSnackBarService,
    private renameTitle: RenameTitleService,
    private route: ActivatedRoute,
    private router: Router,
    private store$: Store
  ) {}

  public ngOnInit(): void {
    console.log("Start ngOnInit Product");

    this.route.queryParams.subscribe((query) => {
      console.log("subscribe query");

      this.queryParams = query;
    });

    this.store$
      .select(UserProductSelector.getUserProduct)
      .subscribe((state) => {
        if (state.products) {
          console.log("We have data in state");

          this.productList = state.products;

          this.maxPage = state.maxPage;
          this.currentPage = state.currentPage;
          this.limit = state.limit;

          this.loader = false;
        } else {
          console.log("We have no data");
          this.requestProduct.getUserProduct(this.queryParams).subscribe({
            next: (response) => {
              console.log(response);
              this.store$.dispatch(
                UserProductActions.setUserProduct({
                  product_list: response.products,
                  maxPage: response.maxPage,
                  currentPage: response.currentPage,
                  limit: response.limit,
                })
              );

              this.productList = response.products;

              this.maxPage = response.maxPage;
              this.currentPage = response.currentPage;
              this.limit = response.limit;

              this.loader = false;
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {},
          });
        }
      });

    this.renameTitle.renameTitleSite("Мої товари");
  }

  public queryParams!: Params;

  public loader: boolean = true;

  public productList: Product[] = [];

  public maxPage!: number;
  public currentPage!: number;
  public limit!: number;

  public pageSizeOptions: number[] = PAGE_SIZE_OPTIONS;

  public async onPaginateChange(event: PageEvent) {
    console.log("event = ", event);

    await this.router.navigate(["account/product"], {
      queryParams: { page: event.pageIndex + 1, limit: event.pageSize },
    });

    console.log("this.queryParams = ", this.queryParams);

    this.requestProduct.getUserProduct(this.queryParams).subscribe((data) => {
      this.store$.dispatch(
        UserProductActions.setUserProduct({
          product_list: data.products,
          maxPage: data.maxPage,
          currentPage: data.currentPage,
          limit: data.limit,
        })
      );
    });
  }

  public deleteById(event: { id: string }, index: number): void {
    this.requestProduct.deleteById(event.id).subscribe({
      next: (data) => {
        this.showMessage.open(data.message, undefined);
        if (data.deleted) {
          this.productList.splice(index, 1);
          this.store$.dispatch(
            UserProductActions.setUserProduct({
              product_list: null,
              maxPage: 1,
              currentPage: 1,
              limit: 10,
            })
          );
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
