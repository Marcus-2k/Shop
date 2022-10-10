import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/service/server/auth.service";
import { RequestUserService } from "./shared/service/server/request-user.service";
import { OtherDataService } from "./shared/service/other-data.service";
import { Favorite, ShoppingCart } from "./shared/interface/interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private requestUser: RequestUserService,
    private otherData: OtherDataService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit App");
    const potentialToken = localStorage.getItem("auth-token");

    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);

      this.auth.checking().subscribe(
        (responce) => {
          this.requestUser.getFavorite().subscribe(
            (responce: Favorite) => {
              this.otherData.favoriteListUser = responce.favorite;
              this.otherData.favoriteNumber = responce.favorite.length;
            },
            (error) => {
              console.log(error);
            }
          );

          this.requestUser.getShoppingCart().subscribe(
            (responce: ShoppingCart) => {
              this.otherData.shoppingCartListUser = responce.shoppingCart;
              this.otherData.shoppingCartNumber = responce.shoppingCart.length;
            },
            (error) => {
              console.log(error);
            }
          );
          this.loader = false;
        },
        (error) => {
          console.log(error);
        }
      );
    }

    this.loader = false;
  }

  loader: boolean = true;
}
