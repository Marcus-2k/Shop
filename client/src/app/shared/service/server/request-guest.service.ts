import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestGuestService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/guest`;

  getGuestHistoryView(
    idArray: string[]
  ): Observable<{ history__view: Product[] }> {
    const queryParams = {
      history_view: idArray.join(","),
    };
    const query = new URLSearchParams(queryParams);
    return this.http.get<{ history__view: Product[] }>(
      `${this.url_server}/history?${query.toString()}`
    );
  }
}
