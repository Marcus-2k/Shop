import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
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
    console.log("Start ngOnInit Header");

    if (this.potentialToken) {
      // get favorite user, if user authorize
      // console.log("Запит на токен");

      this.requestUser.getFavorite().subscribe(
        (responce) => {
          // console.log(responce.favorite);
          this.otherData.favoriteListUser = responce.favorite;
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
  }

  ngDoCheck(): void {
    this.potentialToken = localStorage.getItem("auth-token");
    this.lengthFavorite = this.otherData.favoriteNumber;
    this.lengthCart = this.otherData.shoppingCartNumber;
  }

  body: HTMLBodyElement = document.getElementsByTagName("body")[0];

  // Menu START ===========================================================
  catalogShow: boolean = false;

  catalogOnOff() {
    this.catalogShow = !this.catalogShow;

    if (this.catalogShow) {
      this.body.classList.add("active");
    } else {
      this.body.classList.remove("active");
    }
  }

  // Menu END =============================================================
  // Search START =========================================================
  search(title: string) {
    this.router.navigate([`search`], {
      queryParams: {
        search_text: title,
        limit: 10,
        page: 1,
        type_sort: 5,
      },
    });
  }
  // Search END ===========================================================
  // User START ===========================================================
  lengthFavorite: number = 0;
  lengthCart: number = 0;

  potentialToken: string | null = localStorage.getItem("auth-token");

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
  }
  // User END =============================================================
}
