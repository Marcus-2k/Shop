import { Component, OnInit, DoCheck } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { OpenDialogService } from "src/app/shared/service/open-dialog.service";

import { CatalogComponent } from "src/app/template/catalog/catalog.component";

import { Store } from "@ngrx/store";
import { FavoriteSelector } from "src/app/store/favorite/favorite.selector";
import { ShoppingCartSelector } from "src/app/store/cart/cart.selector";
import { FavoriteActions } from "src/app/store/favorite/favorite.action";
import { ShoppingCartActions } from "src/app/store/cart/cart.action";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private requestUser: RequestUserService,
    private openDialog: OpenDialogService,
    private store$: Store,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Header");

    this.route.queryParams.subscribe((data) => {
      if (data["search_text"]) {
        this.searchText = data["search_text"];
      }
    });

    this.authenticatedUser = this.auth.isAuthenticated();

    if (this.auth.isAuthenticated()) {
      this.requestUser.getFavoriteAndShoppingCart().subscribe({
        next: (data) => {
          console.log(data);
          this.store$.dispatch(FavoriteActions.upFavorite(data));
          this.store$.dispatch(ShoppingCartActions.upShoppingCart(data));
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {},
      });
    }

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

    this.widthBlockForm =
      document.getElementsByClassName("search__form")[0].clientWidth;
  }

  ngDoCheck(): void {
    this.authenticatedUser = this.auth.isAuthenticated();
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
  searchText: string | undefined;

  historySearchArray: string[] = [];

  widthBlockForm: number = 320;
  search(title?: string) {
    if (title) {
      this.searchText = title;
    }

    if (this.searchText) {
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
          historySearch.unshift(this.searchText);
        } else if (index >= 0) {
          historySearch.splice(index, 1);
          historySearch.unshift(this.searchText);
        }

        localStorage.setItem("history-search", historySearch.join(","));
        this.historySearchArray = historySearch;
      } else {
        localStorage.setItem("history-search", this.searchText);
        this.historySearchArray.push(this.searchText);
      }

      this.router.navigate(["search"], {
        queryParams: {
          search_text: this.searchText,
          limit: 10,
          page: 1,
          type_sort: 5,
        },
      });
    }
  }

  clearHistorySearch() {
    localStorage.removeItem("history-search");

    this.historySearchArray = [];
  }
  // Search END ===========================================================
  // User START ===========================================================
  lengthFavorite: number = 0;
  lengthCart: number = 0;

  authenticatedUser: boolean = false;

  openLoginWindow() {
    this.openDialog.openLoginWindow();
  }

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
