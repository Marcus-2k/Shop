import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-small-sidebar",
  templateUrl: "./card-small-sidebar.component.html",
  styleUrls: ["./card-small-sidebar.component.scss"],
})
export class CardSmallSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Small-Sidebar");
  }
}
