import { Component, OnInit } from "@angular/core";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private renameTitle: RenameTitleService) {}

  ngOnInit(): void {
    console.log("Start ngOnInit HOME");

    this.renameTitle.renameTitleSite("Інтернет-Магазин");
  }
}
