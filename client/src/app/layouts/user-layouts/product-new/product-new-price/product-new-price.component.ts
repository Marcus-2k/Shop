import { Component, Input, OnInit } from "@angular/core";

import { InputData_Price } from "src/app/shared/interface/pages/product-new/interfaces";
import { MatFormFieldAppearance } from "@angular/material/form-field";

import { Store } from "@ngrx/store";
import { ProductNewActions } from "src/app/store/product-new/product-new.action";

@Component({
  selector: "app-product-new-price",
  templateUrl: "./product-new-price.component.html",
  styleUrls: ["./product-new-price.component.scss"],
})
export class ProductNewPriceComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() InputData_Price: InputData_Price | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {}

  procentActionNumber() {
    console.log("Start procentActionNumber");

    if (this.InputData_Price) {
      if (
        this.InputData_Price.price !== null &&
        this.InputData_Price.actionPrice !== null
      ) {
        if (
          this.InputData_Price.price > 0 &&
          this.InputData_Price.actionPrice > 0
        ) {
          this.InputData_Price.actionProcent = Number(
            (
              (100 *
                (this.InputData_Price.actionPrice -
                  this.InputData_Price.price)) /
              this.InputData_Price.price
            ).toFixed(2)
          );
        } else {
          this.InputData_Price.actionProcent = -100;
        }

        console.log("actionProcent = ", this.InputData_Price.actionProcent);
      }
    }
  }

  updatePriceStore() {
    if (this.InputData_Price) {
      this.store$.dispatch(
        ProductNewActions.updatePrice({
          priceValue: this.InputData_Price.price,
        })
      );
    }
  }

  updateActionStore() {
    if (this.InputData_Price) {
      this.store$.dispatch(
        ProductNewActions.updateAction({
          actionValue: this.InputData_Price.action,
        })
      );
    }
  }

  updateActionPriceStore() {
    if (this.InputData_Price) {
      this.store$.dispatch(
        ProductNewActions.updateActionPrice({
          actionPriceValue: this.InputData_Price.actionPrice,
        })
      );
    }
  }
}
