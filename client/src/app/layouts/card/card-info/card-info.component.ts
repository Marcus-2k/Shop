import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { ProductInfo, Seller } from "src/app/shared/interface/interfaces";

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

    this.route.data.subscribe(
      (responce: Data) => {
        // console.log(responce["productInfo"]);
        this.productInfo = responce["productInfo"];

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );

    // Slider Swiper
    Swiper.use([Navigation, Pagination]);
    // Slider Swiper
  }

  url_server_folder: string = "http://localhost:5000/";

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
