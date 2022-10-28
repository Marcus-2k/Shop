import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  DeleteCart,
  OrderEvent,
  ShoppingCartList,
} from "src/app/shared/interface/interfaces";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-card-shopping-cart",
  templateUrl: "./product-card-shopping-cart.component.html",
  styleUrls: ["./product-card-shopping-cart.component.scss"],
})
export class ProductCardShoppingCartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.productItem);
    if (this.productItem) {
      this.maxCounter = this.productItem.counter;

      this.price = this.productItem.price;
      if (this.productItem.action) {
        this.actionPrice = this.productItem.actionPrice;
      }
    }
  }

  @Input() productItem?: ShoppingCartList;

  @Output() transferCounter = new EventEmitter();
  @Output() transferDelete = new EventEmitter();

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`;

  price: number = 0;
  actionPrice: number = 0;

  counter: number = 1;
  maxCounter: number = 1;
  validityCounter: boolean = true;

  plusMinusCounter(number: 1 | -1) {
    if (number === 1) {
      if (this.productItem) {
        this.counter += 1;

        const productOrder: OrderEvent = {
          counter: this.counter,
          _id: this.productItem?._id,
        };

        this.transferCounter.emit(productOrder);

        if (this.counter > this.maxCounter) {
          this.validityCounter = false;
        }
      }
    } else if (number === -1) {
      if (this.counter >= 2) {
        if (this.productItem) {
          this.counter -= 1;
          const productOrder: OrderEvent = {
            counter: this.counter,
            _id: this.productItem?._id,
          };

          this.transferCounter.emit(productOrder);

          if (this.counter <= this.maxCounter) {
            this.validityCounter = true;
          }
        }
      }
    }
  }

  deleteProductCart() {
    if (this.productItem) {
      const product: DeleteCart = {
        _id: this.productItem._id,
      };
      this.transferDelete.emit(product);
    }
  }
}
