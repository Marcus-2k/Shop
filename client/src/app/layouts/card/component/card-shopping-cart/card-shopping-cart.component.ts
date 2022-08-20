import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingCart } from "src/app/shared/interface/interfaces";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";

@Component({
  selector: "app-card-shopping-cart",
  templateUrl: "./card-shopping-cart.component.html",
  styleUrls: ["./card-shopping-cart.component.scss"],
})
export class CardShoppingCartComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private requestUser: RequestUserService,
    private otherData: OtherDataService
  ) {}

  @Input() _idProduct?: string;

  ngOnInit(): void {
    this.listShoppingCart = this.otherData.shoppingCartListUser;
    console.log(this.otherData.shoppingCartListUser);
    console.log(this.otherData.shoppingCartNumber);
  }

  buttonDisabled: boolean = false;
  addRemovefavorite() {
    this.buttonDisabled = true; // disabled btn - did not spam clicks

    // checking auth user
    if (this.auth.isAuthenticated()) {
      //
      if (this._idProduct) {
        // if the item was liked
        if (this.listShoppingCart.indexOf(this._idProduct) === -1) {
          this.requestUser.addShoppingCart(this._idProduct).subscribe(
            (responce: ShoppingCart) => {
              this.listShoppingCart = responce.shoppingCart;
              this.otherData.shoppingCartListUser = responce.shoppingCart;
              this.otherData.shoppingCartNumber = responce.shoppingCart.length;
              this.buttonDisabled = false;
            },
            (error) => {
              console.log(error);
              this.buttonDisabled = false;
            }
          );
          // if the item was not liked
        } else if (this.listShoppingCart.indexOf(this._idProduct) >= 0) {
          this.requestUser.removeShoppingCart(this._idProduct).subscribe(
            (responce: ShoppingCart) => {
              this.listShoppingCart = responce.shoppingCart;
              this.otherData.shoppingCartListUser = responce.shoppingCart;
              this.otherData.shoppingCartNumber = responce.shoppingCart.length;
              this.buttonDisabled = false;
            },
            (error) => {
              console.log(error);
              this.buttonDisabled = false;
            }
          );
        }
      }
    } else {
      this.router.navigate(["login"]);
    }
  }

  listShoppingCart: string[] = this.otherData.shoppingCartListUser;
  checkingShoppingCart(): boolean {
    console.log("checkingShoppingCart");
    console.log(this.listShoppingCart);

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
