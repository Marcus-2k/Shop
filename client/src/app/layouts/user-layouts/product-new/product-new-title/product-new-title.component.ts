import { Component, Input, OnInit } from "@angular/core";

import { MatFormFieldAppearance } from "@angular/material/form-field";
import { InputData_Title } from "src/app/shared/interface/pages/product-new/interfaces";

@Component({
  selector: "app-product-new-title",
  templateUrl: "./product-new-title.component.html",
  styleUrls: ["./product-new-title.component.scss"],
})
export class ProductNewTitleComponent implements OnInit {
  constructor() {}

  @Input() InputData_Title: InputData_Title | undefined;
  @Input() appearance: MatFormFieldAppearance = "fill";

  ngOnInit(): void {}
}
