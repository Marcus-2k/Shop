import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { LinkNavigate, Product } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestCardService } from "src/app/shared/service/server/request-card.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requstProduct: RequestProductService,
    private requstCard: RequestCardService,
    private showNotice: ShowNoticeService,
    private categoryName: CategoryProductService,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      const params = value;
      // console.log(params);
      this.route.data.subscribe((responce: any) => {
        console.log("Start ngOnInit Card");
        // console.log(responce.product);

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

      // // console.log(window.location.pathname.split("/")[3]);

      // =======================
      // this.requstCard.getByIdCard(params["id"]).subscribe(
      //   (responce) => {
      //     console.log(responce);
      //   },
      //   (error) => {
      //     this.showNotice.message(
      //       "Сталася помилка на серверові. Спробуйте пізніше."
      //     );
      //     console.log(error);
      //   }
      // );
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
  }
  // Navigation ============================================================================================================
  // Product Content =======================================================================================================
  Product?: Product;
  // Product Content =======================================================================================================
}
