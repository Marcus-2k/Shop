import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { Observable } from "rxjs";

import {
  FoundData,
  FoundDataWithoutCharacteristics,
} from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestSearchService {
  constructor(private http: HttpClient) {}

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  private url_server: string = `http://${this.HOST}${this.PORT}/api`;

  search(queryParams: Params): Observable<FoundData> {
    const query: URLSearchParams = new URLSearchParams(queryParams);

    return this.http.post<FoundData>(
      `${this.url_server}/search?${query.toString()}`,
      { widthCharacteristics: true }
    );
  }

  searchWithoutCharacteristics(
    queryParams: Params
  ): Observable<FoundDataWithoutCharacteristics> {
    const query: URLSearchParams = new URLSearchParams(queryParams);

    return this.http.post<FoundDataWithoutCharacteristics>(
      `${this.url_server}/search?${query.toString()}`,
      { widthCharacteristics: false }
    );
  }
}
