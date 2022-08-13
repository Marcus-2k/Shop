import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
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
    private categoryProduct: CategoryProductService,
    private renameTitle: RenameTitleService
  ) {}

  /* Development */
  url_server = "http://localhost:5000/";

  // Loader site
  loader: boolean = true;

  ngOnInit(): void {
    console.log("Start ngOnInit PRODUCT");

    this.categoryList = this.categoryProduct.categoryList;
    this.requestProduct.getUserProduct().subscribe(
      (response) => {
        console.log(response);

        this.productList = response;
        this.loader = false;
      },
      (e) => {}
    );

    this.renameTitle.renameTitleSite("Мої товари");
  }

  deleteProduct(id: any, index: number): void {
    this.requestProduct.deleteById(id).subscribe(
      (res) => {
        this.showNotice.message(res.message);
        this.productList.splice(index, 1);
      },
      (e) => {
        console.log(e);
      }
    );
  }
  test() {
    console.log(this.productList);
  }

  productList: Product[] = [];
  categoryList: any = [];
}
