import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { Widget_Breadcrumbs } from "src/app/shared/interface/card/card.interfaces";
import { CategoryProduct } from "src/app/shared/interface/interfaces";

import { RequestCatalogService } from "src/app/shared/service/server/request-catalog.service";

@Component({
  selector: "app-catalog-section",
  templateUrl: "./catalog-section.component.html",
  styleUrls: ["./catalog-section.component.scss"],
})
export class CatalogSectionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private requestCatalog: RequestCatalogService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Catalog-Section");

    let navigate_link: string | undefined;

    this.route.url.subscribe((data: UrlSegment[]) => {
      console.log(data[0].path);
      navigate_link = data[0].path;
    });

    if (navigate_link) {
      this.requestCatalog.getCatalogSection(navigate_link).subscribe({
        next: (data) => {
          console.log(data);
          this.catalogSection = data.catalog_section;
          this.widget_breadcrumbs = data.widget_breadcrumbs;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {},
      });
    } else {
      // !
    }
  }

  catalogSection: CategoryProduct | undefined;
  widget_breadcrumbs: Widget_Breadcrumbs | undefined;
}
