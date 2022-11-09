import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/service/server/auth.service";

import { Store } from "@ngrx/store";
import { FavoriteActions } from "./store/favorite/favorite.action";
import { ShoppingCartActions } from "./store/cart/cart.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private store: Store) {}

  ngOnInit(): void {
    console.log("Start ngOnInit App");
    const potentialToken = localStorage.getItem("auth-token");

    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);

      this.auth.checking().subscribe(
        (response) => {
          if (response.authorization) {
            this.store.dispatch(FavoriteActions.getFavorite());
            this.store.dispatch(ShoppingCartActions.getShoppingCart());
          }
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
