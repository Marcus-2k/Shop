import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { Store } from "@ngrx/store";
import { ShoppingCartActions } from "src/app/store/cart/cart.action";
import { ShoppingCartSelector } from "src/app/store/cart/cart.selector";

@Component({
  selector: "app-card-shopping-cart",
  templateUrl: "./card-shopping-cart.component.html",
  styleUrls: ["./card-shopping-cart.component.scss"],
})
export class CardShoppingCartComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private store$: Store
  ) {}

  @Input() _idProduct?: string;
  @Input() counter?: number;
  @Input() type?: number;

  ngOnInit(): void {
    this.store$
      .select(ShoppingCartSelector.shoppingCartList)
      .subscribe((value) => {
        console.log(value);
        this.listShoppingCart = value;
      });

    if (this.type) {
      this.typeBtn = this.type;
    }
  }

  typeBtn: number = 0; // 0 = icon, 1 = icon + text;

  buttonDisabled: boolean = false;
  addRemoveShoppingCart() {
    this.buttonDisabled = true; // disabled btn - did not spam clicks
    // checking auth user
    if (this.auth.isAuthenticated()) {
      //
      if (this._idProduct) {
        // if the item was liked
        if (this.listShoppingCart.indexOf(this._idProduct) === -1) {
          this.store$.dispatch(
            ShoppingCartActions.addShoppingCart({ id: this._idProduct })
          );
          this.buttonDisabled = false;
          // if the item was not liked
        } else if (this.listShoppingCart.indexOf(this._idProduct) >= 0) {
          this.store$.dispatch(
            ShoppingCartActions.removeShoppingCart({ id: this._idProduct })
          );
          this.buttonDisabled = false;
        }
      }
    } else {
      this.router.navigate(["login"]);
    }
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
}
