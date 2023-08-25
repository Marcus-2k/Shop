import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-sidebar-about",
  templateUrl: "./card-sidebar-about.component.html",
  styleUrls: ["./card-sidebar-about.component.scss"],
})
export class CardSidebarAboutComponent {
  @Input() _id?: string;
  @Input() price?: number;
  @Input() discountPrice?: number | null;
  @Input() counter?: number;
}
