import { Component, Input, OnInit } from "@angular/core";
import { Product, Seller } from "src/app/shared/interface/interfaces";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { RequestSellerService } from "src/app/shared/service/server/request-seller.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-card-big-sidebar",
  templateUrl: "./card-big-sidebar.component.html",
  styleUrls: ["./card-big-sidebar.component.scss"],
})
export class CardBigSidebarComponent implements OnInit {
  constructor(
    private requestSeller: RequestSellerService,
    private otherData: OtherDataService,
    private showNotice: ShowNoticeService,
    private requestUser: RequestUserService
  ) {}

  @Input() productSidebar?: Product;

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Big-Sidebar");
    if (this.productSidebar) {
      this.requestSeller.getSellerById(this.productSidebar?.seller).subscribe(
        (responce: Seller) => {
          this.seller = responce;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  url_server_folder: string = "http://localhost:5000/";

  seller?: Seller;

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
}
