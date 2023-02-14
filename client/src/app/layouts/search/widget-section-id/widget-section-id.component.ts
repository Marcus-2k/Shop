import { Component, Input } from "@angular/core";

import { WidgetSectionId } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-widget-section-id",
  templateUrl: "./widget-section-id.component.html",
  styleUrls: ["./widget-section-id.component.scss"],
})
export class WidgetSectionIdComponent {
  constructor() {}

  @Input() widget_section_id: WidgetSectionId[] | undefined;
  @Input() number_of_product: number | undefined;
}
