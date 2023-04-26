import { Component, Input, OnInit } from "@angular/core";

import { AuthService } from "src/app/shared/service/server/auth.service";
import { GuestLocalStorageService } from "src/app/shared/service/guest-local-storage.service";

import { Store } from "@ngrx/store";
import { ShoppingCartActions } from "src/app/store/cart/cart.action";
import { ShoppingCartSelector } from "src/app/store/cart/cart.selector";
import { OrderActions } from "src/app/store/orders/order.action";

@Component({
  selector: "app-card-shopping-cart",
  templateUrl: "./card-shopping-cart.component.html",
  styleUrls: ["./card-shopping-cart.component.scss"],
})
export class CardShoppingCartComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private GuestLocalStorage: GuestLocalStorageService,
    private store$: Store
  ) {}

  @Input() _idProduct?: string;
  @Input() counter?: number;
  @Input() type?: number;

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.store$
        .select(ShoppingCartSelector.shoppingCartList)
        .subscribe((value) => {
          this.listShoppingCart = value;
        });
    } else {
      this.getListShoppingCart();
    }

    if (this.type) {
      this.typeBtn = this.type;
    }
  }

  typeBtn: number = 0; // 0 = icon, 1 = icon + text;

  buttonDisabled: boolean = false;
  addRemoveShoppingCart() {
    this.buttonDisabled = true; // disabled btn - did not spam clicks

    if (this._idProduct) {
      if (this.auth.isAuthenticated()) {
        // if the user is authorised

        if (this.listShoppingCart.indexOf(this._idProduct) === -1) {
          this.store$.dispatch(
            ShoppingCartActions.addShoppingCart({ id: this._idProduct })
          );
        } else if (this.listShoppingCart.indexOf(this._idProduct) >= 0) {
          this.store$.dispatch(
            ShoppingCartActions.removeShoppingCart({ id: this._idProduct })
          );
        }
      } else {
        // if the user is not authorised

        if (this.listShoppingCart.indexOf(this._idProduct) === -1) {
          this.GuestLocalStorage.addShoppingCart(this._idProduct);
        } else if (this.listShoppingCart.indexOf(this._idProduct) >= 0) {
          this.GuestLocalStorage.removeShoppingCart(this._idProduct);
        }

        this.getListShoppingCart();
      }
    }

    this.buttonDisabled = false;
    this.store$.dispatch(OrderActions.clearOrder());
  }

  listShoppingCart: string[] = [];
  checkingShoppingCart(): boolean {
    if (this._idProduct) {
      if (this.listShoppingCart.indexOf(this._idProduct) === -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  getListShoppingCart() {
    const list = this.GuestLocalStorage.getShoppingCart();

    if (list) {
      this.listShoppingCart = list;
    } else {
      this.listShoppingCart = [];
    }
  }
}
