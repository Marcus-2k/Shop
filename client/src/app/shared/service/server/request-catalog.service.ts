import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Widget_Breadcrumbs } from "../../interface/card/card.interfaces";
import { CATALOG, CATALOG_HOME } from "../../interface/interfaces";
import { CATALOG as catalog } from "../db/catalog";

@Injectable({ providedIn: "root" })
export class RequestCatalogService {
  public constructor(private http: HttpClient) {}

  private url_server: string = environment.URL_SERVER_API + "catalog/";

  public getCatalog(): Observable<CATALOG[]> {
    return new BehaviorSubject(catalog as any);

    // return this.http.get<CATALOG[]>(`${this.url_server}`);
  }

  public getCatalogHome(): Observable<CATALOG_HOME[]> {
    return new BehaviorSubject(catalog as any);

    // return this.http.get<CATALOG_HOME[]>(`${this.url_server}home`);
  }

  public getCatalogSection(navigate_link: string): Observable<{
    widget_breadcrumbs: Widget_Breadcrumbs;
    catalog_section: CATALOG;
  }> {
    return this.http.get<{
      widget_breadcrumbs: Widget_Breadcrumbs;
      catalog_section: CATALOG;
    }>(`${this.url_server}${navigate_link}`);
  }
}
