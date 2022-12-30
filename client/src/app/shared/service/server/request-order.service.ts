import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MyOrder, Order } from "../../interface/interfaces";
import { ProductCard_MyOrder } from "../../interface/product-card/product-card.interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestOrderService {
  constructor(private http: HttpClient) {}

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  private url_server: string = `http://${this.HOST}${this.PORT}/api/`;

  createOrder(order: Order | null): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.url_server}order/`, {
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
    }>(`${this.url_server}order/`);
  }
}
