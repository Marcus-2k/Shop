import { Component, Input, OnInit } from "@angular/core";

import { InputData_Status } from "src/app/shared/interface/pages/product-new/interfaces";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { Store } from "@ngrx/store";
import { ProductNewActions } from "src/app/store/product-new/product-new.action";

@Component({
  selector: "app-product-new-status",
  templateUrl: "./product-new-status.component.html",
  styleUrls: ["./product-new-status.component.scss"],
})
export class ProductNewStatusComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() InputData_Status: InputData_Status | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {}

  updateCounterStore() {
    if (this.InputData_Status) {
      if (this.InputData_Status.counter !== null) {
        this.store$.dispatch(
          ProductNewActions.updateCounterStore({
            counterValue: this.InputData_Status.counter,
          })
        );
      }
    }
  }

  updateStatusStore() {
    if (this.InputData_Status) {
      this.store$.dispatch(
        ProductNewActions.updateStatusStore({
          statusValue: this.InputData_Status.status,
        })
      );
    }
  }
}
