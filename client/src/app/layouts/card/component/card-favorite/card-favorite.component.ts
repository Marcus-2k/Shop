import { Component, DoCheck, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Favorite } from "src/app/shared/interface/interfaces";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";

@Component({
  selector: "app-card-favorite",
  templateUrl: "./card-favorite.component.html",
  styleUrls: ["./card-favorite.component.scss"],
})
export class CardFavoriteComponent implements DoCheck {
  constructor(
    private otherData: OtherDataService,
    private requestUser: RequestUserService,
    private auth: AuthService,
    private router: Router
  ) {}

  @Input() _idProduct?: string;

  ngDoCheck() {
    this.listFavorite = this.otherData.favoriteListUser;
  }

  buttonDisabled: boolean = false;
  addRemovefavorite() {
    this.buttonDisabled = true; // disabled btn - did not spam clicks

    // checking auth user
    if (this.auth.isAuthenticated()) {
      //
      if (this._idProduct) {
        // if the item was liked
        if (this.listFavorite.indexOf(this._idProduct) === -1) {
          this.requestUser.addFavorite(this._idProduct).subscribe(
            (responce: Favorite) => {
              this.otherData.favoriteListUser = responce.favorite;
              this.otherData.favoriteNumber = responce.favorite.length;
              this.buttonDisabled = false;
            },
            (error) => {
              console.log(error);
              this.buttonDisabled = false;
            }
          );
          // if the item was not liked
        } else if (this.listFavorite.indexOf(this._idProduct) >= 0) {
          this.requestUser.removeFavorite(this._idProduct).subscribe(
            (responce: Favorite) => {
              this.otherData.favoriteListUser = responce.favorite;
              this.otherData.favoriteNumber = responce.favorite.length;
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

  listFavorite: string[] = this.otherData.favoriteListUser;
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
