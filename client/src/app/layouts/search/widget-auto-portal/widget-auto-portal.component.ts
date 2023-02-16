import { Component, Input } from "@angular/core";

import { WidgetAutoPortal } from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-widget-auto-portal",
  templateUrl: "./widget-auto-portal.component.html",
  styleUrls: ["./widget-auto-portal.component.scss"],
})
export class WidgetAutoPortalComponent {
  constructor() {}

  @Input() widget_auto_portal?: WidgetAutoPortal[];

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`;
}
