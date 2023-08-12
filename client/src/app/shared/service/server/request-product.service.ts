import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { Product, ProductUpdate } from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";
import { Pagination } from "../../interface/pagination";

@Injectable({
  providedIn: "root",
})
export class RequestProductService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "product/";

  getUserProduct(
    queryParams: Params
  ): Observable<{ products: Product[] } & Pagination> {
    const query: URLSearchParams = new URLSearchParams(queryParams);

    console.log("get user product");

    return this.http.get<{ products: Product[] } & Pagination>(
      `${this.url_server}?${query.toString()}`
    );
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
