import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CATALOG, CATALOG_HOME } from "../../interface/interfaces";
import { Widget_Breadcrumbs } from "../../interface/card/card.interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestCatalogService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "catalog/";

  getCatalog(): Observable<CATALOG[]> {
    return this.http.get<CATALOG[]>(`${this.url_server}`);
  }
  getCatalogHome(): Observable<CATALOG_HOME[]> {
    return this.http.get<CATALOG_HOME[]>(`${this.url_server}home`);
  }
  getCatalogSection(navigate_link: string): Observable<{
    widget_breadcrumbs: Widget_Breadcrumbs;
    catalog_section: CATALOG;
  }> {
    return this.http.get<{
      widget_breadcrumbs: Widget_Breadcrumbs;
      catalog_section: CATALOG;
    }>(`${this.url_server}${navigate_link}`);
  }
}
