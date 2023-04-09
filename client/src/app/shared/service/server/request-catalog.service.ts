import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CategoryHome,
  CategoryProduct,
  CategoryProduct_Characteristics,
  Options,
} from "../../interface/interfaces";

import { environment } from "src/environments/environment";
import { Widget_Breadcrumbs } from "../../interface/card/card.interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestCatalogService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "catalog/";

  getCategory(): Observable<CategoryProduct[]> {
    return this.http.get<CategoryProduct[]>(`${this.url_server}category/`);
  }
  getCategoryHome(): Observable<CategoryHome[]> {
    return this.http.get<CategoryHome[]>(`${this.url_server}category/home`);
  }
  getCategoryAndCharacteristics(): Observable<
    CategoryProduct_Characteristics[]
  > {
    return this.http.get<CategoryProduct_Characteristics[]>(
      `${this.url_server}category/characteristics`
    );
  }
  getCharacteristics(categoryNumber: number[]): Observable<Options[]> {
    return this.http.post<Options[]>(`${this.url_server}only-characteristics`, {
      categoryNumber: categoryNumber,
    });
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
