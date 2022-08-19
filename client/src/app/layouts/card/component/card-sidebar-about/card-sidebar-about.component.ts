import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-sidebar-about",
  templateUrl: "./card-sidebar-about.component.html",
  styleUrls: ["./card-sidebar-about.component.scss"],
})
export class CardSidebarAboutComponent {
  constructor() {}

  @Input() price?: number;
  @Input() action?: boolean;
  @Input() actionPrice?: number;
  @Input() _id?: string;
}
