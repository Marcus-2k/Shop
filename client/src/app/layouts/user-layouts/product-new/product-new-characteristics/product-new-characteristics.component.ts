import { Component, Input, OnInit } from "@angular/core";

import { InputData_Characteristics } from "src/app/shared/interface/pages/product-new/interfaces";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { Options } from "src/app/shared/interface/interfaces";

import { RequestCatalogService } from "src/app/shared/service/server/request-catalog.service";

@Component({
  selector: "app-product-new-characteristics",
  templateUrl: "./product-new-characteristics.component.html",
  styleUrls: ["./product-new-characteristics.component.scss"],
})
export class ProductNewCharacteristicsComponent implements OnInit {
  constructor(private requestCatalog: RequestCatalogService) {}

  @Input() InputData_Characteristics: InputData_Characteristics | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {
    console.log("Start ngOnInit Product-New-Characteristics");

    if (this.InputData_Characteristics) {
      if (this.InputData_Characteristics.characteristicsNumber) {
        this.original_characteristicsNumber = [
          ...this.InputData_Characteristics.characteristicsNumber,
        ];
      }

      if (this.InputData_Characteristics.categoryNumber) {
        this.requestCatalog
          .getCharacteristics(this.InputData_Characteristics.categoryNumber)
          .subscribe({
            next: (data) => {
              console.log(data);
              this.characteristics = data;
              this.recordCharacteristicsInArray();
            },
            error: (error) => {},
            complete: () => {},
          });
      }
    }
  }

  characteristics: Options[] = [];

  characteristicsNumber: number[][] = [];
  original_characteristicsNumber: number[][] = [];

  validityCharacteristics: boolean = false; // if there is -1 >>> false
  up_validityCharacteristics: boolean = false; // this.characteristicsNumber === this.up_Product.characteristics | update mode
  up_newCharacteristics: boolean = false;

  checkingValidityCharacteristics() {
    for (let idx = 0; idx < this.characteristicsNumber.length; idx++) {
      let array: number[] = this.characteristicsNumber[idx];

      if (this.characteristicsNumber[idx].length === 0) {
        this.characteristicsNumber[idx] = [-1];
        array = [-1];
        this.validityCharacteristics = false;
      }

      // if the array contains -1
      if (array.indexOf(-1) >= 0) {
        this.validityCharacteristics = false;
        break;
      } else if (array.indexOf(-1) === -1) {
        this.validityCharacteristics = true;
      }
    }

    if (this.up_newCharacteristics === true) {
      for (let index = 0; index < this.characteristicsNumber.length; index++) {
        for (
          let idx = 0;
          idx < this.characteristicsNumber[index].length;
          idx++
        ) {
          if (
            this.characteristicsNumber[index].length !==
            this.original_characteristicsNumber[index].length
          ) {
            if (this.characteristicsNumber[index].indexOf(-1) >= 0) {
            }
            this.up_validityCharacteristics = false;
            break;
          }

          if (
            this.characteristicsNumber[index][idx] ===
            this.original_characteristicsNumber[index][idx]
          ) {
            this.up_validityCharacteristics = true;
          } else {
            this.up_validityCharacteristics = false;
            break;
          }
        }
        if (this.up_validityCharacteristics === false) {
          break;
        }
      }
    }

    console.log(this.characteristicsNumber);
  }

  recordCharacteristicsInArray() {
    this.characteristics.forEach((item) => {
      this.characteristicsNumber.push([-1]);
    });

    this.checkingValidityCharacteristics();
  }

  resetCharacteristics() {
    this.characteristics = [];

    this.characteristicsNumber = [];
  }
}
