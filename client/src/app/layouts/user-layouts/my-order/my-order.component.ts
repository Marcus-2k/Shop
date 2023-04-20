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

    this.storeMyOrder$ = this.store$
      .select(MyOrderSelector.getmMyOrder)
      .subscribe((stateMyOrder) => {
        console.log(stateMyOrder);

        if (
          stateMyOrder.myOrder === null &&
          stateMyOrder.productCard_MyOrder === null
        ) {
          this.store$.dispatch(MyOrderActions.getMyOrder());
        } else {
          this.myOrders = stateMyOrder.myOrder;
          this.productCard = stateMyOrder.productCard_MyOrder;
        }

        if (this.myOrders?.length === 0 && this.productCard?.length === 0) {
          this.myOrdersEmpty = true;
        } else {
          this.myOrdersEmpty = false;
        }

        this.loader = false;
      });
  }

  ngOnDestroy(): void {
    this.storeMyOrder$?.unsubscribe();
  }

  storeMyOrder$: Subscription | undefined;

  loader: boolean = true;
  myOrdersEmpty: boolean = false;

  myOrders: MyOrder[] | null = null;
  productCard: ProductCard_MyOrder[][] | null = null;
}
