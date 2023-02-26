import { Component, Input, OnInit } from "@angular/core";

import { InputData_Status } from "src/app/shared/interface/pages/product-new/interfaces";
import { MatFormFieldAppearance } from "@angular/material/form-field";

@Component({
  selector: "app-product-new-status",
  templateUrl: "./product-new-status.component.html",
  styleUrls: ["./product-new-status.component.scss"],
})
export class ProductNewStatusComponent implements OnInit {
  constructor() {}

  @Input() InputData_Status: InputData_Status | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {}
}
