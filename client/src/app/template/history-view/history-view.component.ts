import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-history-view",
  templateUrl: "./history-view.component.html",
  styleUrls: ["./history-view.component.scss"],
})
export class HistoryViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() history?: Product[];
}
