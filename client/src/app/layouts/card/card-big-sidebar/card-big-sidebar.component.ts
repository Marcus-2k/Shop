import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-big-sidebar",
  templateUrl: "./card-big-sidebar.component.html",
  styleUrls: ["./card-big-sidebar.component.scss"],
})
export class CardBigSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Big-Sidebar");
  }
}
