import { Component, OnInit } from "@angular/core";
import { CategoryProduct, News } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestNewsService } from "src/app/shared/service/server/request-news.service";

import Swiper, { Autoplay } from "swiper";
import { Navigation, Pagination, SwiperOptions } from "swiper";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private renameTitle: RenameTitleService,
    private requestNews: RequestNewsService,
    private categoryName: CategoryProductService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit HOME");

    this.requestNews.getAllNews().subscribe(
      (responce) => {
        console.log(responce);
        this.news = responce;
      },
      (error) => {
        console.log(error);
      }
    );

    Swiper.use([Navigation, Pagination, Autoplay]);
    if (document.documentElement.clientWidth < 1024) {
      this.config.navigation = false;
    }

    this.categoryProduct = this.categoryName.categoryList;

    this.renameTitle.renameTitleSite("Інтернет-Магазин");
  }

  // Aside START ===========================================================================
  categoryProduct: CategoryProduct[] = [];
  // Aside END =============================================================================
  // Main START ============================================================================
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    autoplay: {
      delay: 3000,
      waitForTransition: true,
    },
    speed: 1800,
  }; // Slider swiper config

  url_server_folder: string = "http://localhost:5000/";

  news: News[] = [];

  // Main END ==============================================================================
}
