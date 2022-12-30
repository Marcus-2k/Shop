import { Component, Input } from "@angular/core";

import { ProductCard_MyOrder } from "src/app/shared/interface/product-card/product-card.interfaces";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-card-my-order",
  templateUrl: "./product-card-my-order.component.html",
  styleUrls: ["./product-card-my-order.component.scss"],
})
export class ProductCardMyOrderComponent {
  constructor() {}

  @Input() productItem: ProductCard_MyOrder | undefined;
  @Input() quantityOrdered: number | undefined;

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`;
}
