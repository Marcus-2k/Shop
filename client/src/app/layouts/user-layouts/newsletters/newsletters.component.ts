import { Component, OnInit } from "@angular/core";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";

@Component({
  selector: "app-newsletters",
  templateUrl: "./newsletters.component.html",
  styleUrls: ["./newsletters.component.scss"],
})
export class NewslettersComponent implements OnInit {
  constructor(private renameTitle: RenameTitleService) {}

  ngOnInit(): void {
    this.renameTitle.renameTitleSite("Сповіщення");
  }
}
