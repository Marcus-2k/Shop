import { Component, OnInit } from "@angular/core";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"],
})
export class LikeComponent implements OnInit {
  constructor(private renameTitle: RenameTitleService) {}

  ngOnInit(): void {
    this.renameTitle.renameTitleSite("Вподобані товари");
  }
}
