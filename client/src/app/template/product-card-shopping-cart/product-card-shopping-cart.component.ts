import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  ShoppingCart,
  ShoppingCartChecked,
} from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-product-card-shopping-cart",
  templateUrl: "./product-card-shopping-cart.component.html",
  styleUrls: ["./product-card-shopping-cart.component.scss"],
})
export class ProductCardShoppingCartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // if (this.productItem) {
    //   this.images = this.productItem?.imageSrc;
    // }
    console.log(this.productItem);
  }

  @Input() productItem?: ShoppingCart;

  @Output() transferChecked = new EventEmitter();

  url_server_folder: string = "http://localhost:5000/";

  counter: number = 1;

  plusMinusCounter(number: 1 | -1) {
    if (number === 1) {
      this.counter += 1;
    } else if (number === -1) {
      if (this.counter >= 2) {
        this.counter -= 1;
      }
    }
  }
}
