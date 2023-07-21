import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Product, ProductCard_ShoppingCart } from "../../interface/interfaces";

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
      `${this.url_server}history?${query.toString()}`
    );
  }

  getShoppingCartList(
    carts_id: string
  ): Observable<ProductCard_ShoppingCart[]> {
    return this.http.get<ProductCard_ShoppingCart[]>(
      `${this.url_server}cart?carts_id=${carts_id}`,
      { withCredentials: true }
    );
  }
}
