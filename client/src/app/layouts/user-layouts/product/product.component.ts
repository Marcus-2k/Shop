import { Component, OnInit } from "@angular/core";

import { Product, ProductDelete } from "src/app/shared/interface/interfaces";

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

  deleteProductServer(event: ProductDelete): void {
    //
    this.requestProduct.deleteById(event._id).subscribe(
      (res) => {
        this.showNotice.message(res.message);
        // this.productList.splice(index, 1);
      },
      (error) => {
        console.log(error);
      }
    );
    //
  }
}
