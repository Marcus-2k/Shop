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
    this.route.params.subscribe((params) => {
      this.id = params["id"];

      this.route.data.subscribe((responce: any) => {
        console.log("Start ngOnInit Card");
        // console.log(responce);

        this.renameTitle.renameTitleSite(responce.product.name);
        // Bread Crumbs
        if (responce.product.category.length === 3) {
          this.levelOne =
            this.categoryName.categoryList[
              responce.product.category[0]
            ].nameListCategory[
              responce.product.category[1]
            ].subNameListCategory[
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
      // =======================
    });
  }

  // @Input()

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
  }
  // Navigation ============================================================================================================
  // Product Content =======================================================================================================
  product?: Product;
  id: string = "";

  // Product Content =======================================================================================================
}
