import { Component, Input, OnInit } from "@angular/core";

import { MatFormFieldAppearance } from "@angular/material/form-field";
import { InputData_Title } from "src/app/shared/interface/pages/product-new/interfaces";

import { Store } from "@ngrx/store";
import { ProductNewActions } from "src/app/store/product-new/product-new.action";

@Component({
  selector: "app-product-new-title",
  templateUrl: "./product-new-title.component.html",
  styleUrls: ["./product-new-title.component.scss"],
})
export class ProductNewTitleComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() InputData_Title: InputData_Title | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";

  ngOnInit(): void {
    console.log("Start ngOnInit Product-New-Title");
  }

  updateTitleStore() {
    if (this.InputData_Title) {
      this.store$.dispatch(
        ProductNewActions.updateName({
          nameValue: this.InputData_Title.name,
        })
      );
    }
  }
}
