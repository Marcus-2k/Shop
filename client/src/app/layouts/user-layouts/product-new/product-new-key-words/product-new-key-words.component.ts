import { Component, Input, OnInit } from "@angular/core";

import { MatFormFieldAppearance } from "@angular/material/form-field";
import { InputData_Keywords } from "src/app/shared/interface/pages/product-new/interfaces";

@Component({
  selector: "app-product-new-key-words",
  templateUrl: "./product-new-key-words.component.html",
  styleUrls: ["./product-new-key-words.component.scss"],
})
export class ProductNewKeyWordsComponent implements OnInit {
  constructor() {}

  @Input() InputData_Keywords: InputData_Keywords | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {
    if (this.InputData_Keywords) {
      if (this.update) {
        this.original_keywords = this.InputData_Keywords.keywords.split(" ");
      }

      this.keyupInputKeywords(this.InputData_Keywords.keywords);
    }
  }

  original_keywords: string[] = [];

  keywordsArray: string[] = [];
  lengthKeywords: number = 0;

  validityKeywords: boolean = true;
  up_validityKeywords: boolean = true;

  keyupInputKeywords(value: string) {
    this.keywordsArray = value.replace(/ +/g, " ").trim().split(" ");
    this.lengthKeywords = value.replace(/\s+/g, "").length; // Delete all space

    if (this.keywordsArray[0].length === 0) {
      this.keywordsArray = [];
      this.validityKeywords = true;
    } else {
      this.checkingValidityKeywords();
    }
  }

  checkingValidityKeywords() {
    if (this.InputData_Keywords) {
      console.log("START checkingValidityKeywords");
      for (let index = 0; index < this.keywordsArray.length; index++) {
        if (
          this.keywordsArray[index].length <
            this.InputData_Keywords.minLengthWord ||
          this.keywordsArray[index].length >
            this.InputData_Keywords.maxLengthWord
        ) {
          this.validityKeywords = false;
          break;
        }
        this.validityKeywords = true;
      }

      if (this.update) {
        this.up_checkingValidityKeywords();
      }
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

      this.validityKeywords = true;

      this.InputData_Keywords.keywords = this.keywordsArray.join(" ");
      this.lengthKeywords = this.keywordsArray
        .join(" ")
        .replace(/\s+/g, "").length;
    }
  } // Delete all error key words

  up_checkingValidityKeywords() {
    let counterRepeat: number = 0;

    for (let idx = 0; idx < this.original_keywords.length; idx++) {
      if (this.keywordsArray[idx] === this.original_keywords[idx]) {
        counterRepeat++;
      }
    }

    if (counterRepeat === this.keywordsArray.length) {
      this.up_validityKeywords = true;
    } else {
      this.up_validityKeywords = false;
    }
  }
}
