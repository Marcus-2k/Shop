import { Component, OnInit, DoCheck } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";

import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { CatalogComponent } from "src/app/template/catalog/catalog.component";

import { Store } from "@ngrx/store";
import { FavoriteSelector } from "src/app/store/favorite/favorite.selector";
import { ShoppingCartSelector } from "src/app/store/cart/cart.selector";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(
    private router: Router,
    private auth: AuthService,
    private store$: Store,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Header");

    this.store$
      .select(FavoriteSelector.favoriteNumber)
      .subscribe((counter: number) => {
        this.lengthFavorite = counter;
      });
    this.store$
      .select(ShoppingCartSelector.shoppingCartNumber)
      .subscribe((counter: number) => {
        this.lengthCart = counter;
      });

    const history = localStorage.getItem("history-search");
    if (history) {
      this.historySearchArray = history.split(",");

      this.historySearchArray = this.historySearchArray.filter((searchText) => {
        if (searchText === "") {
          return false;
        } else {
          return true;
        }
      });
    }
  }

  ngDoCheck(): void {
    this.potentialToken = localStorage.getItem("auth-token");
  }

  body: HTMLBodyElement = document.getElementsByTagName("body")[0];

  // Menu START ===========================================================
  openDialogCatalog(): void {
    const dialogRef = this.dialog.open(CatalogComponent, {
      minWidth: 320,
      maxWidth: 1600,
      width:
        window.window.innerWidth > 1275
          ? "80%"
          : window.window.innerWidth > 1024
          ? "95%"
          : window.window.innerWidth > 767
          ? "85%"
          : "100%",
      height: window.window.innerWidth <= 767 ? "100%" : undefined,
    });
  }
  // Menu END =============================================================
  // Search START =========================================================
  searchText: string = "";

  search(title: string) {
    this.searchText = title;

    const historyLocalStorage: string | null =
      localStorage.getItem("history-search");

    if (historyLocalStorage) {
      let historySearch: string[] = historyLocalStorage.split(",");

      let index: number = -1;

      for (let idx = 0; idx < historySearch.length; idx++) {
        if (historySearch[idx] === title) {
          index = idx;
          break;
        }
      }

      if (index === -1) {
        historySearch.unshift(title);
      } else if (index >= 0) {
        historySearch.splice(index, 1);
        historySearch.unshift(title);
      }

      localStorage.setItem("history-search", historySearch.join(","));
      this.historySearchArray = historySearch;
    } else {
      localStorage.setItem("history-search", title);
      this.historySearchArray.push(title);
    }

    this.router.navigate(["search"], {
      queryParams: {
        search_text: title,
        limit: 10,
        page: 1,
        type_sort: 5,
      },
    });
  }

  clearHistorySearch() {
    localStorage.removeItem("history-search");

    this.historySearchArray = [];
  }

  historySearchArray: string[] = [];
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
  // Media Adaptability START =============================================
  burgerMenu: boolean = false;
  windowWidth: number = window.innerWidth;

  clickBurgerMenu() {
    if (this.windowWidth <= 767) {
      if (this.body.classList.contains("active__menu")) {
        this.burgerMenu = false;
        this.body.classList.remove("active__menu");
      } else {
        this.burgerMenu = true;
        this.body.classList.add("active__menu");
      }
    }
  }
  // Media Adaptability END ===============================================
}
