import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Wish } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-product-card-wish",
  templateUrl: "./product-card-wish.component.html",
  styleUrls: ["./product-card-wish.component.scss"],
})
export class ProductCardWishComponent {
  constructor() {}

  @Input() productItem?: Wish;

  url_server_folder: string = "http://localhost:5000/";

  // @Output() transferChecked = new EventEmitter();

  // addInList(active: boolean) {
  //   const wishChecked = {
  //     checked: active,
  //     _id: this.productItem?._id,
  //   };
  // this.transferChecked.emit(item);
  // }
}
