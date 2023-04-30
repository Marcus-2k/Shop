import { Component, Input, OnInit, DoCheck } from "@angular/core";

import { Subscription } from "rxjs";

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
export class CardShoppingCartComponent implements OnInit, DoCheck {
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
      this.subscriptionCart = this.store$
        .select(ShoppingCartSelector.shoppingCartList)
        .subscribe((value) => {
          this.listShoppingCart = value;
        });
    } else {
      this.subscriptionCart = this.GuestLocalStorage.number_of_carts.subscribe(
        (carts_id) => {
          this.listShoppingCart = carts_id;
        }
      );
    }

    this.authenticatedUser = this.auth.isAuthenticated();

    if (this.type) {
      this.typeBtn = this.type;
    }
  }

  ngDoCheck(): void {
    // console.log("Start ngDoCheck id = ", this._idProduct);
    if (
      this.authenticatedUser !== this.auth.isAuthenticated() &&
      this.authenticatedUser === false
    ) {
      /** User Login */
      // console.log("/** User Login */");
      this.subscriptionCart?.unsubscribe();
      this.subscriptionCart = this.store$
        .select(ShoppingCartSelector.shoppingCartList)
        .subscribe((carts_id) => {
          this.listShoppingCart = carts_id;
        });
    }
    if (
      this.authenticatedUser !== this.auth.isAuthenticated() &&
      this.authenticatedUser === true
    ) {
      /** User logout */
      // console.log("/** User logout */");
      this.subscriptionCart?.unsubscribe();
      this.subscriptionCart = this.GuestLocalStorage.number_of_carts.subscribe(
        (carts_id) => {
          this.listShoppingCart = carts_id;
        }
      );
    }

    this.authenticatedUser = this.auth.isAuthenticated();
  }

  authenticatedUser: boolean = false;

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
      }
    }

    this.buttonDisabled = false;
    this.store$.dispatch(OrderActions.clearOrder());
  }

  subscriptionCart: Subscription | undefined;
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
}
