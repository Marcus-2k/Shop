import { Component, Input, OnInit } from "@angular/core";

import { MatFormFieldAppearance } from "@angular/material/form-field";
import { InputData_Description } from "src/app/shared/interface/pages/product-new/interfaces";

import { Store } from "@ngrx/store";
import { ProductNewActions } from "src/app/store/product-new/product-new.action";

@Component({
  selector: "app-product-new-description",
  templateUrl: "./product-new-description.component.html",
  styleUrls: ["./product-new-description.component.scss"],
})
export class ProductNewDescriptionComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() InputData_Description: InputData_Description | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";

  ngOnInit(): void {}

  updateDescriptionStore() {
    if (this.InputData_Description) {
      if (this.InputData_Description.description !== null) {
        this.store$.dispatch(
          ProductNewActions.updateDescription({
            descriptionValue: this.InputData_Description.description,
          })
        );
      }
    }
  }
}
