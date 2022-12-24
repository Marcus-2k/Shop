import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-order",
  templateUrl: "./my-order.component.html",
  styleUrls: ["./my-order.component.scss"],
})
export class MyOrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit My-Order");

    this.loader = false;
  }

  loader: boolean = true;
}
