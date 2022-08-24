import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import {
  ShoppingCart,
  ShoppingCartChecked,
  WishChecked,
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

  test() {
    console.log(this.stepper);
  }

  ngOnInit(): void {
    console.log("Start ngOnInit Cart");

    this.requestUser.getShoppingCartList().subscribe(
      (responce: ShoppingCart[]) => {
        console.log(responce);
        this.shoppingCart = responce;

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );

    this.renameTitle.renameTitleSite("Кошик");
  }

  loader: boolean = true;

  shoppingCart: ShoppingCart[] = [];

  totolPriceAction: number = 0;
  totolPrice: number = 0;

  // Stepper
  stepper = {
    activeBlock: 0, // cart = 0, contacts = 1, shipping = 2,  payment = 3;
  };

  prevStep() {
    this.stepper.activeBlock -= 1;
  }
  nextStep() {
    this.stepper.activeBlock += 1;
  }
}
