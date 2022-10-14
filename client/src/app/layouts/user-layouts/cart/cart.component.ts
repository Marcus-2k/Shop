import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  DeleteCart,
  Order,
  OrderEvent,
  ShoppingCart,
  ShoppingCartList,
} from "src/app/shared/interface/interfaces";
import { OtherDataService } from "src/app/shared/service/other-data.service";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(
    private renameTitle: RenameTitleService,
    private requestUser: RequestUserService,
    private otherData: OtherDataService
  ) {}

  ngOnInit() {
    console.log("Start ngOnInit Cart");

    this.requestUser.getShoppingCartList().subscribe(
      (responce: ShoppingCartList[]) => {
        console.log(responce);
        this.shoppingCart = responce;

        this.loader = false;
        if (responce.length !== 0) {
          const userID = localStorage.getItem("_id");

          responce.forEach((element) => {
            if (userID) {
              const itemOrder: Order = {
                _id: element._id,
                counter: 1,
                merchant: userID,
              };
              this.order.push(itemOrder);
            }
          });

          this.calcTotalCounterProduct();
          this.calcTotalPrice();
        } else {
          this.emptyCart = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.formContacts = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      tel: new FormControl(null, [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
        Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"),
      ]),
    });

    this.renameTitle.renameTitleSite("Кошик");
  }

  loader: boolean = true;

  emptyCart: boolean = false;

  // Step Cart ========================================
  shoppingCart: ShoppingCartList[] = [];
  order: Order[] = [];

  totalCounterProduct: number = 0;
  totalPrice: number = 0;
  totalActionPrice: number = 0;

  calcTotalPrice() {
    this.totalPrice = 0;
    this.totalActionPrice = 0;

    this.shoppingCart.forEach((element, idx) => {
      this.totalPrice += element.price * this.order[idx].counter;

      if (element.action) {
        this.totalActionPrice += element.actionPrice * this.order[idx].counter;
      } else {
        this.totalActionPrice += element.price * this.order[idx].counter;
      }
    });
  } // Total price
  calcTotalCounterProduct() {
    this.totalCounterProduct = 0;
    this.order.forEach((element) => {
      this.totalCounterProduct += element.counter;
    });
  } // The total amount of purchased goods
  gettingCounter(event: OrderEvent) {
    let positionInList = -1;
    this.order.forEach((element, idx) => {
      if (element._id === event._id) {
        positionInList = idx;
        // return;
      }
    });
    console.log(positionInList);

    if (positionInList >= 0) {
      this.order[positionInList].counter = event.counter;
      if (
        this.order[positionInList].counter >
        this.shoppingCart[positionInList].counter
      ) {
        this.stepper.validityCart = false;
      }

      for (let idx = 0; idx < this.order.length; idx++) {
        if (this.order[idx].counter > this.shoppingCart[idx].counter) {
          this.stepper.validityCart = false;
          break;
        } else {
          this.stepper.validityCart = true;
        }
      }
    }

    this.calcTotalCounterProduct();
    this.calcTotalPrice();
  }
  gettingIdDelete(event: DeleteCart) {
    this.requestUser.removeShoppingCart(event._id).subscribe(
      (responce: ShoppingCart) => {
        let index: number = 0;
        for (let idx = 0; idx < this.shoppingCart.length; idx++) {
          if (this.shoppingCart[idx]._id === event._id) {
            index = idx;
            break;
          }
        }

        this.shoppingCart.splice(index, 1);
        this.order.splice(index, 1);

        this.otherData.shoppingCartListUser = responce.shoppingCart;
        this.otherData.shoppingCartNumber = responce.shoppingCart.length;

        this.calcTotalCounterProduct();
        this.calcTotalPrice();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // Step Cart ========================================

  // Step Contacts ====================================
  formContacts: FormGroup = new FormGroup({});
  // Step Contacts ====================================

  // Step Shipping ====================================
  // Step Shipping ====================================

  // Step Payment =====================================
  // Step Payment =====================================

  // Stepper
  stepper = {
    activeBlock: 0, // cart = 0, contacts = 1, shipping = 2,  payment = 3;
    // Validity
    validityCart: true,
    validityContacts: this.formContacts.valid,
    validityShipping: false,
    validityPayment: false,
    // Touch
    touchCart: true, // 0
    touchContacts: false, // 1
    touchShipping: false, // 2
    touchPayment: false, // 3
  };

  prevStep() {
    this.stepper.activeBlock -= 1;
  }
  nextStep() {
    this.stepper.activeBlock += 1;
    if (
      this.stepper.activeBlock === 1 &&
      this.stepper.touchContacts === false
    ) {
      this.stepper.touchContacts = true;
      console.log("sds");
    }
    if (
      this.stepper.activeBlock === 2 &&
      this.stepper.touchShipping === false
    ) {
      this.stepper.touchShipping = true;
      console.log("sds");
    }
    if (this.stepper.activeBlock === 3 && this.stepper.touchPayment === false) {
      this.stepper.touchPayment = true;
      console.log("sds");
    }
  }
}
