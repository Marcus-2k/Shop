import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/auth.service";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(
    private router: Router,
    private auth: AuthService,
    private requestUser: RequestUserService,
    private otherData: OtherDataService,
    private showNotice: ShowNoticeService
  ) {}

  ngOnInit(): void {
    this.requestUser.getFavorite().subscribe(
      (responce) => {
        console.log(responce);
        this.lengthFavorite = responce.favorite.length;
        this.otherData.favoriteNumber = responce.favorite.length;
      },
      (error) => {
        this.showNotice.message(
          "Сталася помилка на серверові. Спробуйте пізніше."
        );
        console.log(error);
      }
    );
  }

  ngDoCheck(): void {
    this.potentialToken = localStorage.getItem("auth-token");
    this.lengthFavorite = this.otherData.favoriteNumber;
    this.lengthCart = this.otherData.cartNumber;
  }

  lengthFavorite: number = 0;
  lengthCart: number = 0;

  // Щоб показувати відповідні іконки, (login / exit, account, favorite, cart)
  potentialToken = localStorage.getItem("auth-token");

  search(title: string) {
    this.router.navigate([`search`], {
      queryParams: {
        search_text: title,
        limit: 10,
        page: 1,
      },
    });
  } // search title >> redirect >> /search

  logout() {
    this.auth.logout().subscribe(
      (res) => {
        console.log(res.message);
        this.auth.setToken(null); // Delete token client
        localStorage.clear(); // Delete token localStorage
      },
      (e) => {
        console.log(e);
      }
    );
  } // logout site
}
