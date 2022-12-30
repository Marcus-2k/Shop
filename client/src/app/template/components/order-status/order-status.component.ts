import { Component, Input } from "@angular/core";

@Component({
  selector: "app-order-status",
  templateUrl: "./order-status.component.html",
  styleUrls: ["./order-status.component.scss"],
})
export class OrderStatusComponent {
  constructor() {}
  @Input() status: number | undefined;
}
