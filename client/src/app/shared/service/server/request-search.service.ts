import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "src/app/shared/interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestSearchService {
  constructor(private http: HttpClient) {}

  private url_server: string = `http://${environment.HOST}${environment.PORT}/api`;

  search(
    title: string,
    queryParam?: string
  ): Observable<{
    product: Product[];
    uniqueProductCategory: number[][];
    productOptionsBlock: number[][][];
  }> {
    if (queryParam) {
      return this.http.get<{
        product: Product[];
        uniqueProductCategory: number[][];
        productOptionsBlock: number[][][];
      }>(
        `${this.url_server}/search?search_text=${title}&category=${queryParam}`
      );
    } else {
      return this.http.get<any>(
        `${this.url_server}/search?search_text=${title}`
      );
    }
  }
}
