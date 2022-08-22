import { Component, OnInit } from "@angular/core";
import { Wish } from "src/app/shared/interface/interfaces";
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
    private requestUser: RequestUserService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit WishList");

    this.requestUser.getWishList().subscribe(
      (responce) => {
        console.log(responce);
        this.wishList = responce;

        responce.forEach((item) => {
          if (item.action) {
            this.totolPrice = this.totolPrice + item.actionPrice;
          } else {
            this.totolPrice = this.totolPrice + item.price;
          }
        });

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );

    this.renameTitle.renameTitleSite("Вподобані товари");
  }

  loader: boolean = true;

  wishList: Wish[] = [];

  totolPriceAction: number = 0;
  totolPrice: number = 0;

  productListChecked: {}[] = [];

  // gettingChecked(item: any) {
  // console.log("sadsdsasd");
  // console.log(item);
  // this.productListChecked.forEach((element) => {

  // });
  // this.productListChecked.push(item);
  // }
}
