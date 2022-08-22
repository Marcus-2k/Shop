import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Wish, WishChecked } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-product-card-wish",
  templateUrl: "./product-card-wish.component.html",
  styleUrls: ["./product-card-wish.component.scss"],
})
export class ProductCardWishComponent {
  constructor() {}

  @Input() productItem?: Wish;

  url_server_folder: string = "http://localhost:5000/";

  @Output() transferChecked = new EventEmitter();

  addInList(checked: boolean) {
    if (this.productItem?._id) {
      const wishChecked: WishChecked = {
        checked: checked,
        _id: this.productItem?._id,
      };

      this.transferChecked.emit(wishChecked);
    }
  }
}
