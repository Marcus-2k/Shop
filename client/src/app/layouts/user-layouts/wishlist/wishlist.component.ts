import { Component, OnInit } from "@angular/core";
import { Wish, WishChecked } from "src/app/shared/interface/interfaces";
import { UserDataService } from "src/app/shared/service/user-data.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.scss"],
})
export class WishlistComponent implements OnInit {
  constructor(
    private renameTitle: RenameTitleService,
    private requestUser: RequestUserService,
    private userData: UserDataService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit WishList");

    this.requestUser.getWishList().subscribe(
      (responce) => {
        this.wishList = responce;

        this.loader = false;

        this.calcTotolPrice();
      },
      (error) => {
        console.log(error);
      }
    );

    this.renameTitle.renameTitleSite("Вподобані товари");
  }

  calcTotolPrice() {
    this.totolPriceAction = 0;
    this.totolPrice = 0;
    this.wishList.forEach((item) => {
      if (item.action) {
        this.totolPrice = this.totolPrice + item.actionPrice;
      } else {
        this.totolPrice = this.totolPrice + item.price;
      }
    });
  }

  loader: boolean = true;

  wishList: Wish[] = [];

  totolPriceAction: number = 0;
  totolPrice: number = 0;

  wishChecked: WishChecked[] = [];

  gettingChecked(item: WishChecked) {
    let exist: boolean = false;

    this.wishChecked.forEach((element, idx) => {
      if (element._id === item._id) {
        exist = true;
        if (item.checked === true) {
          element.checked = item.checked;
        } else {
          this.wishChecked.splice(idx, 1);
        }
      }
    });

    if (exist === false) {
      this.wishChecked.push(item);
    }
  }

  deleteWishChecked() {
    if (this.wishChecked.length !== 0) {
      const listId: string[] = [];

      this.wishChecked.forEach((element) => {
        listId.push(element._id);
      });

      this.requestUser.deleteWishList(listId).subscribe(
        (responce) => {
          this.wishList = responce;
          this.wishChecked = [];
          this.requestUser.getFavorite().subscribe(
            (responce) => {
              this.userData.favoriteListUser = responce.favorite;
              this.userData.favoriteNumber.next(responce.favorite.length);

              this.calcTotolPrice();
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
    }
  }
}
