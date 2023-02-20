import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { FoundData } from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestSearchService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "search/";

  search(queryParams: Params, params: Params): Observable<FoundData> {
    const query: URLSearchParams = new URLSearchParams(queryParams);

    if (params.hasOwnProperty("navigate_link")) {
      return this.http.get<FoundData>(
        `${this.url_server}${params["navigate_link"]}?${query.toString()}`
      );
    } else {
      return this.http.get<FoundData>(
        ` ${this.url_server}?${query.toString()}`
      );
    }
  }
}
