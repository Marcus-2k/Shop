import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CategoryHome,
  CategoryProduct,
  CategoryProduct_Characteristics,
} from "../../interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestCatalogService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "catalog/";

  getCategory(): Observable<CategoryProduct[]> {
    return this.http.get<CategoryProduct[]>(`${this.url_server}category/`);
  }
  getCategoryHome(): Observable<CategoryHome[]> {
    return this.http.get<CategoryHome[]>(`${this.url_server}category/home`);
  }
  getCategoryAndCharacteristics(): Observable<
    CategoryProduct_Characteristics[]
  > {
    return this.http.get<CategoryProduct_Characteristics[]>(
      `${this.url_server}category/characteristics`
    );
  }
}
