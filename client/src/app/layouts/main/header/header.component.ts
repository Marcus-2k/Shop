import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { UserDataService } from "src/app/shared/service/user-data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, DoCheck, OnDestroy {
  constructor(
    private router: Router,
    private auth: AuthService,
    private userData: UserDataService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Header");

    this.body.addEventListener("click", (event: Event) => {
      this.catalogOff(event);
    });

    this.userData.favoriteNumber.subscribe((counter: number) => {
      this.lengthFavorite = counter;
    });
    this.userData.shoppingCartNumber.subscribe((counter: number) => {
      this.lengthCart = counter;
    });
  }

  ngDoCheck(): void {
    this.potentialToken = localStorage.getItem("auth-token");
  }

  ngOnDestroy(): void {
    this.body.removeEventListener("click", (event: Event) => {
      this.catalogOff(event);
    });

    this.userData.favoriteNumber.unsubscribe();
    this.userData.shoppingCartNumber.unsubscribe();
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
  catalogOff(event: any) {
    if (
      this.catalogShow === true &&
      !event.path[0].classList.contains("catalog__button")
    ) {
      this.catalogShow = false;
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
      (response) => {
        console.log(response);
      },
      (e) => {
        console.log(e);
      }
    );
  }
  // User END =============================================================
}
