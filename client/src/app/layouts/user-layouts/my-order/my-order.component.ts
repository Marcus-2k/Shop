import { Component, OnInit } from "@angular/core";

import { MyOrder } from "src/app/shared/interface/interfaces";
import { ProductCard_MyOrder } from "src/app/shared/interface/product-card/product-card.interfaces";

import { RequestOrderService } from "src/app/shared/service/server/request-order.service";

@Component({
  selector: "app-my-order",
  templateUrl: "./my-order.component.html",
  styleUrls: ["./my-order.component.scss"],
})
export class MyOrderComponent implements OnInit {
  constructor(private requestOrder: RequestOrderService) {}

  ngOnInit(): void {
    console.log("Start ngOnInit My-Order");

    this.requestOrder.getListOrderUser().subscribe({
      next: (response) => {
        console.log(response);
        this.myOrders = response.MyOrder;
        this.productCard = response.ProductCard_MyOrder;

        if (response.MyOrder.length === 0) {
          this.myOrdersEmpty = true;
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.loader = false;
      },
    });
  }

  loader: boolean = true;
  myOrdersEmpty: boolean = false;

  myOrders: MyOrder[] | undefined;
  productCard: ProductCard_MyOrder[][] | undefined;
}
