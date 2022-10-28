import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interface/interfaces";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-small-sidebar",
  templateUrl: "./card-small-sidebar.component.html",
  styleUrls: ["./card-small-sidebar.component.scss"],
})
export class CardSmallSidebarComponent implements OnInit {
  constructor() {}

  @Input() productSidebar?: Product;

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Small-Sidebar");

    if (this.productSidebar) {
      this.image = this.productSidebar?.imageSrc;
    }
    this.loader = false;
  }

  loader: boolean = true;

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`;

  image: string[] = [];
}
