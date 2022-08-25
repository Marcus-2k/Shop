import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OrderEvent, ShoppingCart } from "src/app/shared/interface/interfaces";

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

  test() {
    console.log(this.formControlCounter.invalid);
  }
  @Input() productItem?: ShoppingCart;

  @Output() transferCounter = new EventEmitter();

  url_server_folder: string = "http://localhost:5000/";

  price: number = 0;
  actionPrice: number = 0;

  counter: number = 1;
  maxCounter: number = 1;
  validityCounter: boolean = true;

  formControlCounter: FormGroup = new FormGroup({
    counter: new FormControl(null, [
      Validators.required,
      Validators.max(this.maxCounter),
    ]),
  });

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
}
