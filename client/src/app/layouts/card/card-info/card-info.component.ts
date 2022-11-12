import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { ProductInfo, Seller } from "src/app/shared/interface/interfaces";
import { environment } from "src/environments/environment";

import Swiper from "swiper";
import { Navigation, Pagination, SwiperOptions } from "swiper";

@Component({
  selector: "app-card-info",
  templateUrl: "./card-info.component.html",
  styleUrls: ["./card-info.component.scss"],
})
export class CardInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Info");

    this.route.data.subscribe((data: Data) => {
      console.log(data["productInfo"]);
      this.productInfo = data["productInfo"];

      this.loader = false;
    });

    // Slider Swiper
    Swiper.use([Navigation, Pagination]);
    // Slider Swiper
    if (document.documentElement.clientWidth < 1024) {
      this.config.navigation = false;
    }
  }

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`;

  loader: boolean = true;

  productInfo?: ProductInfo;
  seller?: Seller;

  // Slider Swiper
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
  };
  // Slider Swiper
}
