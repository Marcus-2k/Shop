import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { ProductInfo, Seller } from "src/app/shared/interface/interfaces";

import { OtherDataService } from "src/app/shared/service/other-data.service";

import { RequestSellerService } from "src/app/shared/service/server/request-seller.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";

import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

import Swiper from "swiper";
import { Navigation, Pagination, SwiperOptions } from "swiper";

@Component({
  selector: "app-card-info",
  templateUrl: "./card-info.component.html",
  styleUrls: ["./card-info.component.scss"],
})
export class CardInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private showNotice: ShowNoticeService,
    private requestUser: RequestUserService,
    private requestSeller: RequestSellerService,
    private otherData: OtherDataService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Info");

    this.route.data.subscribe(
      (responce: Data) => {
        // console.log(responce["productInfo"]);
        this.productInfo = responce["productInfo"];

        this.loader = false;
        this.requestSeller
          .getSellerById(responce["productInfo"].seller)
          .subscribe(
            (responce: Seller) => {
              this.seller = responce;
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );

    // Favorite
    this.listFavoriteUser = this.otherData.favoriteListUser;
    // Favorite

    // Slider Swiper
    Swiper.use([Navigation, Pagination]);
    // Slider Swiper
  }

  url_server_folder: string = "http://localhost:5000/";

  loader: boolean = true;

  productInfo?: ProductInfo;
  seller?: Seller;

  // Slider Swiper
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
  };
  // Slider Swiper

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

  // Add or Remove Favorite === START
  workFunction: boolean = false;
  addRemoveFavorite(id: string | undefined) {
    this.workFunction = true;

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
  }
  // Add or Remove Favorite === END
}
