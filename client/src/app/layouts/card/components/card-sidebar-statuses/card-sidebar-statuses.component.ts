import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-sidebar-statuses",
  templateUrl: "./card-sidebar-statuses.component.html",
  styleUrls: ["./card-sidebar-statuses.component.scss"],
})
export class CardSidebarStatusesComponent {
  constructor() {}

  @Input() status?: number;
}
