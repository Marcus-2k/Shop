import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product-Card");
  }

  @Input() productItem?: Product;

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  hoverEnter(imageLogo: HTMLImageElement, imageSubLogo: HTMLImageElement) {
    imageLogo.classList.add("display-none");
    imageLogo.classList.remove("display-block");

    imageSubLogo.classList.add("display-block");
    imageSubLogo.classList.remove("display-none");
  }
  hoverLeave(imageLogo: HTMLImageElement, imageSubLogo: HTMLImageElement) {
    imageLogo.classList.add("display-block");
    imageLogo.classList.remove("display-none");

    imageSubLogo.classList.add("display-none");
    imageSubLogo.classList.remove("display-block");
  }
}
