import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-big-sidebar",
  templateUrl: "./card-big-sidebar.component.html",
  styleUrls: ["./card-big-sidebar.component.scss"],
})
export class CardBigSidebarComponent implements OnInit {
  constructor() {}

  @Input() productSidebar?: Product;

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Big-Sidebar");
  }
}
