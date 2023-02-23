import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestGuestService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "guest/";

  getGuestHistoryView(
    idArray: string[]
  ): Observable<{ history__view: Product[] }> {
    const queryParams = {
      history_view: idArray.join(","),
    };
    const query = new URLSearchParams(queryParams);
    return this.http.get<{ history__view: Product[] }>(
      `${this.url_server}history/?${query.toString()}`
    );
  }
}
