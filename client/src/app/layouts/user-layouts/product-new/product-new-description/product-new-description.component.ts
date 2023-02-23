import { Component, Input, OnInit } from "@angular/core";

import { MatFormFieldAppearance } from "@angular/material/form-field";
import { InputData_Description } from "src/app/shared/interface/pages/product-new/interfaces";

@Component({
  selector: "app-product-new-description",
  templateUrl: "./product-new-description.component.html",
  styleUrls: ["./product-new-description.component.scss"],
})
export class ProductNewDescriptionComponent implements OnInit {
  constructor() {}

  @Input() InputData_Description: InputData_Description | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";

  ngOnInit(): void {}
}
