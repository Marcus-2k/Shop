import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { Options, Product } from "src/app/shared/interface/interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestSearchService {
  constructor(private http: HttpClient) {}

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  private url_server: string = `http://${this.HOST}${this.PORT}/api`;

  search(
    title: string,
    queryParams?: Params
  ): Observable<{
    product: Product[];
    uniqueProductCategory: number[][];
    productCharacteristicsBlock: number[][][];
    productCharacteristicsName: Options[][];
    currentPage: number;
    maxPage: number;
    limit: number;
  }> {
    if (queryParams) {
      let query = new URLSearchParams(queryParams);
      return this.http.get<{
        product: Product[];
        uniqueProductCategory: number[][];
        productCharacteristicsBlock: number[][][];
        productCharacteristicsName: Options[][];
        currentPage: number;
        maxPage: number;
        limit: number;
      }>(`${this.url_server}/search?${query.toString()}`);
    } else {
      return this.http.get<{
        product: Product[];
        uniqueProductCategory: number[][];
        productCharacteristicsBlock: number[][][];
        productCharacteristicsName: Options[][];
        currentPage: number;
        maxPage: number;
        limit: number;
      }>(`${this.url_server}/search?search_text=${title}`);
    }
  }
}
