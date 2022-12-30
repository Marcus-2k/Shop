import { Component, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { MyOrder } from "src/app/shared/interface/interfaces";
import { ProductCard_MyOrder } from "src/app/shared/interface/product-card/product-card.interfaces";

@Component({
  selector: "app-my-order-detail",
  templateUrl: "./my-order-detail.component.html",
  styleUrls: ["./my-order-detail.component.scss"],
})
export class MyOrderDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<MyOrderDetailComponent, MyOrder>,
    @Inject(MAT_DIALOG_DATA)
    public data: { myOrder: MyOrder; productCard: ProductCard_MyOrder[] }
  ) {}

  closeWindow() {
    this.dialogRef.close();
  }
}
