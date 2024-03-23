import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { FoundData } from "src/app/shared/interface/interfaces";
import { environment } from "src/environments/environment";
import { FILTERS } from "../db/filters";
import { PRODUCTS } from "../db/products";

@Injectable({ providedIn: "root" })
export class RequestSearchService {
  public constructor(private http: HttpClient) {}

  public url_server: string = environment.URL_SERVER_API + "search/";

  public search(queryParams: Params, params: Params): Observable<FoundData> {
    return new BehaviorSubject({
      product: PRODUCTS as any,
      filters: FILTERS as any,
      widget_breadcrumbs: undefined,

      widget_auto_portal: undefined,
      widget_section_id: undefined,

      number_of_product: 100,
      currentPage: 1,
      maxPage: 10,
      limit: 10,
    });

    // const query: URLSearchParams = new URLSearchParams(queryParams);

    // if (params.hasOwnProperty("navigate_link")) {
    //   return this.http.get<FoundData>(
    //     `${this.url_server}${params["navigate_link"]}?${query.toString()}`
    //   );
    // } else {
    //   return this.http.get<FoundData>(`${this.url_server}?${query.toString()}`);
    // }
  }
}
