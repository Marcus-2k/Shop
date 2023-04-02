import { Component, OnInit } from "@angular/core";

import { Product } from "src/app/shared/interface/interfaces";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(
    private requestProduct: RequestProductService,
    private showNotice: ShowNoticeService,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product");

    this.requestProduct.getUserProduct().subscribe(
      (response) => {
        console.log(response);

        this.productList = response;

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );

    this.renameTitle.renameTitleSite("Мої товари");
  }

  loader: boolean = true;

  productList: Product[] = [];

  deleteById(event: { id: string }, index: number): void {
    this.requestProduct.deleteById(event.id).subscribe({
      next: (data) => {
        this.showNotice.message(data.message);
        if (data.deleted) {
          this.productList.splice(index, 1);
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
