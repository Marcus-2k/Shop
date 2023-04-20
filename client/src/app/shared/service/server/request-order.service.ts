import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { MyOrder, Order } from "../../interface/interfaces";
import { ProductCard_MyOrder } from "../../interface/product-card/product-card.interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestOrderService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "order/";

  createOrder(order: Order | null): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.url_server}`, {
      ...order,
    });
  }

  getListOrderUser(): Observable<{
    MyOrder: MyOrder[];
    ProductCard_MyOrder: ProductCard_MyOrder[][];
  }> {
    return this.http.get<{
      MyOrder: MyOrder[];
      ProductCard_MyOrder: ProductCard_MyOrder[][];
    }>(`${this.url_server}`);
  }
}
