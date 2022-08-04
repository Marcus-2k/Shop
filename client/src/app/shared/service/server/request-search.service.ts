import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestSearchService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api`;

  search(
    title: string,
    queryParams?: Params
  ): Observable<{
    product: Product[];
    uniqueProductCategory: number[][];
    productOptionsBlock: number[][][];
  }> {
    if (queryParams) {
      let query = new URLSearchParams(queryParams);
      return this.http.get<{
        product: Product[];
        uniqueProductCategory: number[][];
        productOptionsBlock: number[][][];
      }>(`${this.url_server}/search?${query.toString()}`);
    } else {
      return this.http.get<any>(
        `${this.url_server}/search?search_text=${title}`
      );
    }
  }
}
