import { Component, Input } from "@angular/core";

import { MyOrder } from "src/app/shared/interface/interfaces";
import { ProductCard_MyOrder } from "src/app/shared/interface/product-card/product-card.interfaces";

import { OpenDialogService } from "src/app/shared/service/open-dialog.service";

@Component({
  selector: "app-my-order-item",
  templateUrl: "./my-order-item.component.html",
  styleUrls: ["./my-order-item.component.scss"],
})
export class MyOrderItemComponent {
  constructor(private openDialog: OpenDialogService) {}

  @Input() order: MyOrder | undefined;
  @Input() productCard: ProductCard_MyOrder[] | undefined;

  openDetailDialog() {
    if (this.order && this.productCard) {
      this.openDialog.openDetailWindow(this.order, this.productCard);
    }
  }
}
