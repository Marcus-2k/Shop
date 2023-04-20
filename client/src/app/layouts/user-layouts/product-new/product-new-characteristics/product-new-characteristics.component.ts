import { Component, Input, OnInit } from "@angular/core";

import { InputData_Characteristics } from "src/app/shared/interface/pages/product-new/interfaces";
import { MatFormFieldAppearance } from "@angular/material/form-field";

import { Store } from "@ngrx/store";
import { ProductNewActions } from "src/app/store/product-new/product-new.action";

@Component({
  selector: "app-product-new-characteristics",
  templateUrl: "./product-new-characteristics.component.html",
  styleUrls: ["./product-new-characteristics.component.scss"],
})
export class ProductNewCharacteristicsComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() InputData_Characteristics: InputData_Characteristics | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {
    console.log("Start ngOnInit Product-New-Characteristics");

    if (this.InputData_Characteristics) {
      if (this.InputData_Characteristics.characteristicsNumber) {
        this.characteristicsNumber = JSON.parse(
          JSON.stringify(this.InputData_Characteristics.characteristicsNumber)
        );
      }

      if (
        this.update === false ||
        this.InputData_Characteristics.characteristicsNumber === null
      ) {
        this.recordCharacteristicsInArray();
        this.updateCharacteristicsStore();
      }
    }
  }

  characteristicsNumber: number[][] = [];

  recordCharacteristicsInArray() {
    if (this.InputData_Characteristics?.characteristicsName) {
      for (
        let idx = 0;
        idx < this.InputData_Characteristics.characteristicsName.length;
        idx++
      ) {
        this.characteristicsNumber.push([]);
      }
    }
  }

  updateCharacteristicsStore() {
    this.store$.dispatch(
      ProductNewActions.updateCharacteristics({
        characteristicsValue: JSON.parse(
          JSON.stringify(this.characteristicsNumber)
        ),
      })
    );
  }
}
