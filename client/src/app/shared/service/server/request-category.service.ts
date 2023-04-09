import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import {
  Options,
  CategoryProduct_Characteristics,
} from "../../interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestCategoryService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "category/";

  getCategory(): Observable<CategoryProduct_Characteristics[]> {
    return this.http.get<CategoryProduct_Characteristics[]>(
      `${this.url_server}`
    );
  }
  getCharacteristics(categoryNumber: number[]): Observable<Options[]> {
    return this.http.post<Options[]>(`${this.url_server}characteristics`, {
      categoryNumber: categoryNumber,
    });
  }
}
