import { Component, Input, OnInit } from "@angular/core";

import { InputData_Price } from "src/app/shared/interface/pages/product-new/interfaces";
import { MatFormFieldAppearance } from "@angular/material/form-field";

@Component({
  selector: "app-product-new-price",
  templateUrl: "./product-new-price.component.html",
  styleUrls: ["./product-new-price.component.scss"],
})
export class ProductNewPriceComponent implements OnInit {
  constructor() {}

  @Input() InputData_Price: InputData_Price | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {}

  procentActionNumber() {
    if (this.InputData_Price) {
      let newAction: number =
        (100 *
          (this.InputData_Price.actionPrice - this.InputData_Price.price)) /
        this.InputData_Price.price;
      let newActionFixed = newAction.toFixed(2);
      this.InputData_Price.actionProcent = Number(newActionFixed);
    }
  }
}
