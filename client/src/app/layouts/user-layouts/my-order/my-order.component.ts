import { Component, OnDestroy, OnInit } from "@angular/core";

import { MyOrder } from "src/app/shared/interface/interfaces";
import { ProductCard_MyOrder } from "src/app/shared/interface/product-card/product-card.interfaces";

import { Subscription } from "rxjs";

import { Store } from "@ngrx/store";
import { MyOrderActions } from "src/app/store/my-orders/my-order.action";
import { MyOrderSelector } from "src/app/store/my-orders/my-order.selector";

@Component({
  selector: "app-my-order",
  templateUrl: "./my-order.component.html",
  styleUrls: ["./my-order.component.scss"],
})
export class MyOrderComponent implements OnInit, OnDestroy {
  constructor(private store$: Store) {}

  ngOnInit(): void {
    console.log("Start ngOnInit My-Order");

    this.store$.dispatch(MyOrderActions.getMyOrder());

    this.storeMyOrder$ = this.store$
      .select(MyOrderSelector.getmMyOrder)
      .subscribe((stateMyOrder) => {
        console.log(stateMyOrder);

        if (
          stateMyOrder.myOrder.length === 0 &&
          stateMyOrder.productCard_MyOrder.length === 0
        ) {
          this.myOrdersEmpty = true;
        } else {
          this.myOrdersEmpty = false;

          this.myOrders = stateMyOrder.myOrder;
          this.productCard = stateMyOrder.productCard_MyOrder;
        }

        this.loader = false;
      });

    // this.requestOrder.getListOrderUser().subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.myOrders = response.MyOrder;
    //     this.productCard = response.ProductCard_MyOrder;

    //     if (response.MyOrder.length === 0) {
    //       this.myOrdersEmpty = true;
    //     }
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     this.loader = false;
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.storeMyOrder$?.unsubscribe();
  }

  storeMyOrder$: Subscription | undefined;

  loader: boolean = true;
  myOrdersEmpty: boolean = false;

  myOrders: MyOrder[] | undefined;
  productCard: ProductCard_MyOrder[][] | undefined;
}
