import { Component, OnInit } from "@angular/core";
import {
  Favorite,
  Wish,
  WishChecked,
} from "src/app/shared/interface/interfaces";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { FavoriteActions } from "src/app/store/favorite/favorite.action";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.scss"],
})
export class WishlistComponent implements OnInit {
  constructor(
    private renameTitle: RenameTitleService,
    private requestUser: RequestUserService,
    private store$: Store
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit WishList");

    this.requestUser.getWishList().subscribe(
      (response) => {
        this.wishList = response;

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
      if (item.discountPrice !== null) {
        this.totolPrice = this.totolPrice + item.discountPrice;
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
        (response) => {
          this.wishList = response;
          this.wishChecked = [];

          let favoriteList: Favorite = { favorite: [] };
          response.forEach((element) => {
            favoriteList.favorite.push(element._id);
          });

          this.store$.dispatch(FavoriteActions.upFavorite(favoriteList));
          this.calcTotolPrice();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
