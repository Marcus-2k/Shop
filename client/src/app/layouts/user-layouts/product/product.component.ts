import { Component, OnInit } from "@angular/core";
import { ErrorHandlerService } from "src/app/shared/error/error-handler.service";
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
    private error: ErrorHandlerService,
    private showNotice: ShowNoticeService,
    private category: CategoryProductService
  ) {}

  /* Development */
  url = "http://localhost:5000/";

  // Loader
  loaderUserP: boolean = true;

  ngOnInit(): void {
    this.categoryList = this.category.categoryList;
    this.requestProduct.getUserProduct().subscribe(
      (res) => {
        // console.log(res);
        res.forEach((element: Product) => {
          this.productList.push(element);
        });
        this.loaderUserP = false;
      },
      (e) => {
        this.error.checkError(e);
      }
    );
  }

  deleteByIdProduct(id: any, indexP: number): void {
    this.requestProduct.deleteById(id).subscribe(
      (res) => {
        this.showNotice.message(res.message);
        this.productList.splice(indexP, 1);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  productList: Product[] = [];
  categoryList: any = [];
}
