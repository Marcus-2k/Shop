import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CategoryHome, CategoryProduct } from "../../interface/interfaces";
import { Widget_Breadcrumbs } from "../../interface/card/card.interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestCatalogService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "catalog/";

  getCategory(): Observable<CategoryProduct[]> {
    return this.http.get<CategoryProduct[]>(`${this.url_server}`);
  }
  getCategoryHome(): Observable<CategoryHome[]> {
    return this.http.get<CategoryHome[]>(`${this.url_server}home`);
  }
  getCatalogSection(navigate_link: string): Observable<{
    widget_breadcrumbs: Widget_Breadcrumbs;
    catalog_section: CategoryProduct;
  }> {
    return this.http.get<{
      widget_breadcrumbs: Widget_Breadcrumbs;
      catalog_section: CategoryProduct;
    }>(`${this.url_server}${navigate_link}`);
  }
}
