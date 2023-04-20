import { Component, Input } from "@angular/core";

import { ProductCard_ShoppingCart } from "src/app/shared/interface/interfaces";

import { Store } from "@ngrx/store";
import { OrderActions } from "src/app/store/orders/order.action";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-card-shopping-cart",
  templateUrl: "./product-card-shopping-cart.component.html",
  styleUrls: ["./product-card-shopping-cart.component.scss"],
})
export class ProductCardShoppingCartComponent {
  constructor(private store$: Store) {}

  @Input() productItem?: ProductCard_ShoppingCart;
  @Input() counter_order?: number;
  @Input() sequence_number?: {
    sequence_number_order: number;
    sequence_number_card: number;
  };

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  updateCounter() {
    if (this.sequence_number !== undefined) {
      this.store$.dispatch(
        OrderActions.updateCounterProduct(this.sequence_number)
      );
    }
  }
  downdateCounter() {
    if (this.sequence_number !== undefined) {
      this.store$.dispatch(
        OrderActions.downdateCounterProduct(this.sequence_number)
      );
    }
  }

  removeProductCart() {
    if (this.sequence_number !== undefined && this.productItem) {
      this.store$.dispatch(
        OrderActions.removeProduct({
          sequence_number_order: this.sequence_number.sequence_number_order,
          sequence_number_card: this.sequence_number.sequence_number_card,
          product_id: this.productItem._id,
        })
      );
    }
  }
}
