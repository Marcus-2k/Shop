import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { ActionReducer, ReducerObservable, Store } from "@ngrx/store";
import { FavoriteActions } from "src/app/store/favorite/favorite.action";
import { FavoriteSelector } from "src/app/store/favorite/favorite.selector";

@Component({
  selector: "app-card-favorite",
  templateUrl: "./card-favorite.component.html",
  styleUrls: ["./card-favorite.component.scss"],
})
export class CardFavoriteComponent implements OnInit, OnDestroy {
  constructor(
    private auth: AuthService,
    private store$: Store,
    private router: Router
  ) {}

  ngOnInit() {
    this.store$.select(FavoriteSelector.favoriteList).subscribe((value) => {
      console.log(value);
      this.listFavorite = value;
    });
  }

  ngOnDestroy(): void {}

  @Input() _idProduct?: string;

  buttonDisabled: boolean = false;
  addRemovefavorite() {
    this.buttonDisabled = true; // disabled btn - did not spam clicks

    // checking auth user
    if (this.auth.isAuthenticated()) {
      if (this._idProduct) {
        // if the item was liked
        if (this.listFavorite.indexOf(this._idProduct) === -1) {
          this.store$.dispatch(
            FavoriteActions.addFavorite({ id: this._idProduct })
          );
          this.buttonDisabled = false;
          // if the item was not liked
        } else if (this.listFavorite.indexOf(this._idProduct) >= 0) {
          this.store$.dispatch(
            FavoriteActions.removeFavorite({ id: this._idProduct })
          );
          this.buttonDisabled = false;
        }
      }
    } else {
      this.router.navigate(["login"]);
    }
  }

  listFavorite: string[] = [];
  checkingFavorite(): boolean {
    if (this._idProduct) {
      if (this.listFavorite.indexOf(this._idProduct) === -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
