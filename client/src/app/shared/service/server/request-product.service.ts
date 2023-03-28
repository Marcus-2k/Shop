import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product, ProductUpdate } from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestProductService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "account/product/";

  getUserProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url_server}`);
  }

  getByIdProduct(id: string): Observable<ProductUpdate> {
    return this.http.get<ProductUpdate>(`${this.url_server}${id}`);
  }

  updateById(upProduct: any, id: any): Observable<any> {
    return this.http.patch<any>(`${this.url_server}${id}`, upProduct);
  }

  deleteById(id: string): Observable<{ message: string; deleted: boolean }> {
    return this.http.delete<{ message: string; deleted: boolean }>(
      `${this.url_server}${id}`
    );
  }

  createProduct(product: any): Observable<Product> {
    return this.http.post<any>(`${this.url_server}`, product);
  }
}
