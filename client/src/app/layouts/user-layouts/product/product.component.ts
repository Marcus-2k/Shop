import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
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
    private categoryProduct: CategoryProductService
  ) {}

  /* Development */
  url_server = "http://localhost:5000/";

  // Loader site
  loader: boolean = true;

  ngOnInit(): void {
    this.requestProduct.getUserProduct().subscribe(
      (response) => {
        console.log(response);

        this.productList = response.product;
        // this.loader = false;
      },
      (e) => {}
    );

    this.categoryList = this.categoryProduct.categoryList;
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

  productList: Product[] = [];
  categoryList: any = [];
}
