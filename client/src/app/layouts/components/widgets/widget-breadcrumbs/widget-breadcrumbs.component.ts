import { Component, Input } from "@angular/core";

import { Widget_Breadcrumbs } from "src/app/shared/interface/card/card.interfaces";

@Component({
  selector: "app-widget-breadcrumbs",
  templateUrl: "./widget-breadcrumbs.component.html",
  styleUrls: ["./widget-breadcrumbs.component.scss"],
})
export class WidgetBreadcrumbsComponent {
  constructor() {}

  @Input() widget_breadcrumbs: undefined | Widget_Breadcrumbs;
  @Input() type: undefined | "card" | "search" | "catalog-section";
}
