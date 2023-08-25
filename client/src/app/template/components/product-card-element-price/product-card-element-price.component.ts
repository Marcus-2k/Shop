import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-card-element-price",
  templateUrl: "./product-card-element-price.component.html",
  styleUrls: ["./product-card-element-price.component.scss"],
})
export class ProductCardElementPriceComponent {
  constructor() {}

  @Input() price?: number;
  @Input() discountPrice?: number | null;
}
