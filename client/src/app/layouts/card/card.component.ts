import { Component, OnInit, DoCheck } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { LinkNavigate, Product } from "src/app/shared/interface/interfaces";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit, DoCheck {
  constructor(
    private route: ActivatedRoute,
    private renameTitle: RenameTitleService,
    private auth: AuthService,
    private requestUser: RequestUserService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card");

    this.route.data.subscribe((responce: Data) => {
      console.log(responce["product"]);
      this.product = responce["product"].product;

      // Bread Crumbs
      this.levelOne = responce["product"].breadCrumbs.levelOne;
      this.levelTwo = responce["product"].breadCrumbs.levelTwo;
      this.location = responce["product"].breadCrumbs.location;
      // Bread Crumbs

      // Title
      this.titleProduct = responce["product"].product.name;
      // Title

      // Navigation
      this.navBar(window.location.pathname.split("/")[3]);
      // Navigation

      this.renameTitle.renameTitleSite(responce["product"].product.name);

      // if the user is authorized, we add his history to the database. If it is a guest, then add in localStorage
      if (this.auth.isAuthenticated()) {
        this.requestUser
          .newHistoryView(responce["product"].product._id)
          .subscribe(
            (responce) => {
              console.log(responce); // Успішно додано в історію переглядів | Успішно додано в історію на перше місце
            },
            (error) => {
              console.log(error);
            }
          );
      } else {
        const historyLS: string | null = localStorage.getItem("history-view");
        if (historyLS) {
          let historyArray = historyLS.split(",");

          if (historyArray.indexOf(responce["product"]._id) === -1) {
            historyArray.unshift(responce["product"]._id);

            localStorage.setItem("history-view", historyArray.join(","));
          } else {
            const index = historyArray.indexOf(responce["product"]._id);

            historyArray.splice(index, 1);
            historyArray.unshift(responce["product"]._id);

            localStorage.setItem("history-view", historyArray.join(","));
          }
        } else {
          localStorage.setItem("history-view", responce["product"]._id);
        }
      }
    });
  }
  ngDoCheck(): void {
    const locationPage = window.location.pathname.split("/")[3];
    this.navBar(locationPage);
  }
  // Bread Crumbs ==========================================================================================================
  levelOne?: string;
  levelTwo?: string;
  location?: string;
  // Bread Crumbs ==========================================================================================================
  // Title =================================================================================================================
  titleProduct?: string;
  // Title =================================================================================================================
  // Navigation ============================================================================================================
  linkNavigate: LinkNavigate[] = [
    { name: "Усе про товар", link: "info" },
    { name: "Характеристики", link: "characteristics" },
    { name: "Відгуки", link: "comments" },
    { name: "Питання", link: "questions" },
    { name: "Фото", link: "photo" },
    { name: "Купують разом", link: "accessories" },
  ];
  activeRoute: string = "info";
  navBar(link: string) {
    this.activeRoute = link;

    if (link === "accessories") {
      this.sidebar = 0;
    } else if (link === "info") {
      this.sidebar = 1;
    } else {
      this.sidebar = 2;
    }
  }
  // Navigation ============================================================================================================
  // Product Content =======================================================================================================
  product?: Product;

  sidebar: 0 | 1 | 2 = 0; // 0 === none, 1 === big-sidebar, 2 === small-sidebar
  // Product Content =======================================================================================================
}
