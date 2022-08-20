import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LinkNavigate, Product } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryName: CategoryProductService,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((responce: any) => {
      console.log("Start ngOnInit Card");
      // console.log(responce["product"]);
      this.product = responce["product"];

      this.renameTitle.renameTitleSite(responce.product.name);

      // Bread Crumbs
      if (responce.product.category.length === 3) {
        this.levelOne =
          this.categoryName.categoryList[
            responce.product.category[0]
          ].nameListCategory[responce.product.category[1]].subNameListCategory[
            responce.product.category[2]
          ].titleSubNameListCategory;
        this.levelTwo =
          this.categoryName.categoryList[
            responce.product.category[0]
          ].nameListCategory[responce.product.category[1]].subNameCategory;
      }
      this.location = responce.product.name;
      // Bread Crumbs

      // Title
      this.titleProduct = responce.product.name;
      // Title

      // Navigation
      this.navBar(window.location.pathname.split("/")[3]);
      // Navigation
    });
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
