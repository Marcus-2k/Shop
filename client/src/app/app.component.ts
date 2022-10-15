import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/service/server/auth.service";
import { RequestUserService } from "./shared/service/server/request-user.service";
import { UserDataService } from "./shared/service/user-data.service";
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
    private userData: UserDataService
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
              this.userData.favoriteListUser = responce.favorite;
              this.userData.favoriteNumber.next(responce.favorite.length);
            },
            (error) => {
              console.log(error);
            }
          );

          this.requestUser.getShoppingCart().subscribe(
            (responce: ShoppingCart) => {
              this.userData.shoppingCartListUser = responce.shoppingCart;
              this.userData.shoppingCartNumber.next(
                responce.shoppingCart.length
              );
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
