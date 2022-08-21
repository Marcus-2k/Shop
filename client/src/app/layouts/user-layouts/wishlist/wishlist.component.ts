import { Component, OnInit } from "@angular/core";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.scss"],
})
export class WishlistComponent implements OnInit {
  constructor(private renameTitle: RenameTitleService) {}

  ngOnInit(): void {
    this.renameTitle.renameTitleSite("Вподобані товари");
  }
}
