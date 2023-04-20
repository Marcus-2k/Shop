import { HttpClient } from "@angular/common/http";
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

  createProduct(data: FormData): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.url_server}`, data);
  }

  updateById(data: FormData, id: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.url_server}${id}`,
      data
    );
  }

  deleteById(id: string): Observable<{ message: string; deleted: boolean }> {
    return this.http.delete<{ message: string; deleted: boolean }>(
      `${this.url_server}${id}`
    );
  }
}
