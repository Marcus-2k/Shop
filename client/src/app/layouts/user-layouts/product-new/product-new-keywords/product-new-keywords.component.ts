import { Component, Input, OnInit } from "@angular/core";

import { MatFormFieldAppearance } from "@angular/material/form-field";
import { InputData_Keywords } from "src/app/shared/interface/pages/product-new/interfaces";

import { Store } from "@ngrx/store";
import { ProductNewActions } from "src/app/store/product-new/product-new.action";

@Component({
  selector: "app-product-new-keywords",
  templateUrl: "./product-new-keywords.component.html",
  styleUrls: ["./product-new-keywords.component.scss"],
})
export class ProductNewKeywordsComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() InputData_Keywords: InputData_Keywords | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {
    if (this.InputData_Keywords) {
      this.keyupInputKeywords(this.InputData_Keywords.keywords);
    }
  }

  keywordsArray: string[] = [];
  lengthKeywords: number = 0;

  keyupInputKeywords(value: string) {
    this.keywordsArray = value.replace(/ +/g, " ").trim().split(" ");
    this.lengthKeywords = value.replace(/\s+/g, "").length; // Delete all space

    if (this.keywordsArray[0].length === 0) {
      this.keywordsArray = [];
    }
  }

  checkingValidityKeywords(): boolean {
    if (this.InputData_Keywords) {
      for (let index = 0; index < this.keywordsArray.length; index++) {
        if (
          this.keywordsArray[index].length <
            this.InputData_Keywords.minLengthWord ||
          this.keywordsArray[index].length >
            this.InputData_Keywords.maxLengthWord
        ) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } // Checking of the all key words inputted correct

  deleteErrorKeywords() {
    if (this.InputData_Keywords) {
      for (let index = 0; index < this.keywordsArray.length; index++) {
        if (
          this.keywordsArray[index].length <
            this.InputData_Keywords.minLengthWord ||
          this.keywordsArray[index].length >
            this.InputData_Keywords.maxLengthWord
        ) {
          this.keywordsArray.splice(index, 1);
          index--;
        }
      } // ['hi', 'hello', 'n', 'cool', 'description'] >>> ['hi', 'hello', 'cool'] | if minLengthword: 2 and maxLengthword: 10

      this.InputData_Keywords.keywords = this.keywordsArray.join(" ");
      this.lengthKeywords = this.keywordsArray
        .join(" ")
        .replace(/\s+/g, "").length;
    }

    this.updateKeywordsStore();
  } // Delete all error key words

  updateKeywordsStore() {
    if (this.InputData_Keywords) {
      this.store$.dispatch(
        ProductNewActions.updateKeywords({
          keywordsValue: this.InputData_Keywords.keywords,
        })
      );
    }
  }
}
