import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Wish, WishChecked } from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-card-wish",
  templateUrl: "./product-card-wish.component.html",
  styleUrls: ["./product-card-wish.component.scss"],
})
export class ProductCardWishComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product-Card-Wish");
  }

  @Input() productItem?: Wish;
  @Output() transferChecked = new EventEmitter();

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  addInList(checked: boolean) {
    if (this.productItem?._id) {
      const wishChecked: WishChecked = {
        checked: checked,
        _id: this.productItem?._id,
      };

      this.transferChecked.emit(wishChecked);
    }
  }

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
