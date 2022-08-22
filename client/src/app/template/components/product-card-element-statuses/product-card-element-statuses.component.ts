import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-card-element-statuses",
  templateUrl: "./product-card-element-statuses.component.html",
  styleUrls: ["./product-card-element-statuses.component.scss"],
})
export class ProductCardElementStatusesComponent {
  constructor() {}

  @Input() status?: number;
}
