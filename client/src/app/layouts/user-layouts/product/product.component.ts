import { Component, OnInit } from "@angular/core";

import { Product } from "src/app/shared/interface/interfaces";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { OpenSnackBarService } from "src/app/shared/service/open-snack-bar.service";

import { Store } from "@ngrx/store";
import { UserProductActions } from "src/app/store/product/product.action";
import { UserProductSelector } from "src/app/store/product/product.selector";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(
    private requestProduct: RequestProductService,
    private showMessage: OpenSnackBarService,
    private renameTitle: RenameTitleService,
    private store$: Store
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product");

    this.store$
      .select(UserProductSelector.getUserProduct)
      .subscribe((state) => {
        if (state.products) {
          console.log("We have data");
          this.productList = state.products;
          this.loader = false;
        } else {
          console.log("We have no data");
          this.requestProduct.getUserProduct().subscribe({
            next: (response) => {
              console.log(response);
              this.store$.dispatch(
                UserProductActions.setUserProduct({ product_list: response })
              );
              this.productList = response;
              this.loader = false;
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {},
          });
        }
      })
      .unsubscribe();

    this.renameTitle.renameTitleSite("Мої товари");
  }

  loader: boolean = true;

  productList: Product[] = [];

  deleteById(event: { id: string }, index: number): void {
    this.requestProduct.deleteById(event.id).subscribe({
      next: (data) => {
        this.showMessage.open(data.message, undefined);
        if (data.deleted) {
          this.productList.splice(index, 1);
          this.store$.dispatch(
            UserProductActions.setUserProduct({ product_list: null })
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
