import { Component, DoCheck, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, ProductInfo } from "src/app/shared/interface/interfaces";
import { AuthService } from "src/app/shared/service/auth.service";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { RequestCardService } from "src/app/shared/service/server/request-card.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-card-info",
  templateUrl: "./card-info.component.html",
  styleUrls: ["./card-info.component.scss"],
})
export class CardInfoComponent implements OnInit, DoCheck {
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private requestCard: RequestCardService,
    private showNotice: ShowNoticeService,
    private requestUser: RequestUserService,
    private otherData: OtherDataService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Info");

    // console.log(window.location.pathname.split("/")[2]);
    const id: string = window.location.pathname.split("/")[2];
    this.requestCard.getByIdCardInfo(id).subscribe(
      (responce) => {
        console.log(responce);
        this.productInfo = responce;
        this.loader = false;
      },
      (error) => {
        this.showNotice.message(
          "Сталася помилка на серверові. Спробуйте пізніше."
        );
        console.log(error);
      }
    );
    // Favorite
    this.listFavoriteUser = this.otherData.favoriteListUser;
    console.log(this.listFavoriteUser);

    // Favorite
  }
  ngDoCheck(): void {
    // const potentialToken: string | null = localStorage.getItem("auth-token");
    // if (potentialToken) {
    //   this.authorize = true;
    // } else {
    //   this.authorize = false;
    // }
  }
  // authorize: boolean = false;

  loader: boolean = true;

  productInfo?: ProductInfo;

  url_server_folder: string = "http://localhost:5000/";

  listFavoriteUser: string[] = [];
  checkedFavorite(productID: string | undefined): Boolean {
    if (productID) {
      for (const iterator of this.listFavoriteUser) {
        if (iterator === productID) {
          return true;
        }
      }

      return false;
    } else {
      return false;
    }
  }

  workFunction: boolean = false;
  addRemoveFavorite(id: string | undefined) {
    this.workFunction = true;
    //
    if (id) {
      //
      if (this.listFavoriteUser.indexOf(id) === -1) {
        console.log("Add favirite in you list");

        this.requestUser.addFavorite(id).subscribe(
          (response) => {
            this.workFunction = false;
            console.log(response.favorite);
            this.listFavoriteUser = response.favorite;
            this.otherData.favoriteNumber = response.favorite.length;
            this.showNotice.message(response.message);
          },
          (error) => {
            this.workFunction = false;
            this.showNotice.message(
              "Сталася помилка на серверові. Спробуйте пізніше."
            );
            console.log(error);
          }
        );
      } else if (this.listFavoriteUser.indexOf(id) !== -1) {
        console.log("Remove favirite in you list");

        this.requestUser.removeFavorite(id).subscribe(
          (response) => {
            this.workFunction = false;
            console.log(response.favorite);
            this.listFavoriteUser = response.favorite;
            this.otherData.favoriteNumber = response.favorite.length;
            this.showNotice.message(response.message);
          },
          (error) => {
            this.workFunction = false;
            this.showNotice.message(
              "Сталася помилка на серверові. Спробуйте пізніше."
            );
            console.log(error);
          }
        );
      }
      //
    } else {
      this.workFunction = false;
    }
    //
  }
}
