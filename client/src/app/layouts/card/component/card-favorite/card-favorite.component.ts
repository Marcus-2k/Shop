import { Component, DoCheck, Input } from "@angular/core";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";

@Component({
  selector: "app-card-favorite",
  templateUrl: "./card-favorite.component.html",
  styleUrls: ["./card-favorite.component.scss"],
})
export class CardFavoriteComponent implements DoCheck {
  constructor(
    private otherData: OtherDataService,
    private requestUser: RequestUserService
  ) {}

  @Input() _id?: string;

  ngDoCheck() {
    this.listFavorite = this.otherData.favoriteListUser;
  }

  buttonDisabled: boolean = false;
  addRemovefavorite() {
    this.buttonDisabled = true;
    if (this._id) {
      if (this.listFavorite.indexOf(this._id) === -1) {
        this.requestUser.addFavorite(this._id).subscribe(
          (responce) => {
            this.otherData.favoriteListUser = responce.favorite;
            this.buttonDisabled = false;
          },
          (error) => {
            console.log(error);
            this.buttonDisabled = false;
          }
        );
      } else if (this.listFavorite.indexOf(this._id) >= 0) {
        this.requestUser.removeFavorite(this._id).subscribe(
          (responce) => {
            this.otherData.favoriteListUser = responce.favorite;
            this.buttonDisabled = false;
          },
          (error) => {
            console.log(error);
            this.buttonDisabled = false;
          }
        );
      }
    }
  }

  listFavorite: string[] = this.otherData.favoriteListUser;
  checkingFavorite(): boolean {
    if (this._id) {
      if (this.listFavorite.indexOf(this._id) === -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
