import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interface/interfaces";
import { environment } from "src/environments/environment";

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

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`;
}
