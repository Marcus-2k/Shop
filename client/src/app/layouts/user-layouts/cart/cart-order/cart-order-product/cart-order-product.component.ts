import { Component, Input, OnInit, OnDestroy } from "@angular/core";

import {
  OrderProduct,
  ProductCard_ShoppingCart,
} from "src/app/shared/interface/interfaces";

import { Subscription } from "rxjs";

import { Store } from "@ngrx/store";
import { OrderSelector } from "src/app/store/orders/order.selector";

@Component({
  selector: "app-cart-order-product",
  templateUrl: "./cart-order-product.component.html",
  styleUrls: ["./cart-order-product.component.scss"],
})
export class CartOrderProductComponent implements OnInit, OnDestroy {
  constructor(private store$: Store) {}

  @Input() sequence_number_order?: number;

  ngOnInit(): void {
    if (this.sequence_number_order !== undefined) {
      this.storeOrderProduct$ = this.store$
        .select(OrderSelector.getProduct(this.sequence_number_order))
        .subscribe((stateProduct) => {
          if (stateProduct) {
            this.orderProduct = stateProduct.info;
          } else {
            this.orderProduct = undefined;
          }
        });

      this.storeShoppingCart$ = this.store$
        .select(OrderSelector.getProductCard(this.sequence_number_order))
        .subscribe((stateProductCard) => {
          if (stateProductCard) {
            this.shoppingCart = stateProductCard;
          } else {
            this.shoppingCart = undefined;
          }
        });
    }
  }
  ngOnDestroy(): void {
    this.storeOrderProduct$?.unsubscribe();
    this.storeShoppingCart$?.unsubscribe();
  }

  storeOrderProduct$: Subscription | undefined;
  storeShoppingCart$: Subscription | undefined;

  orderProduct: OrderProduct | undefined;
  shoppingCart: ProductCard_ShoppingCart[] | undefined;
}
