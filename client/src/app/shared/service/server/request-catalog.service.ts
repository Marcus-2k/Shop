import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  CategoryProduct,
  CategoryProduct_Characteristics,
} from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestCatalogService {
  constructor(private http: HttpClient) {}

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  private url_server: string = `http://${this.HOST}${this.PORT}/api/`;

  getCategory(): Observable<CategoryProduct[]> {
    return this.http.get<CategoryProduct[]>(
      `${this.url_server}catalog/category/`
    );
  }
  getCategoryHome(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url_server}catalog/category/home`);
  }
  getCategoryAndCharacteristics(): Observable<
    CategoryProduct_Characteristics[]
  > {
    return this.http.get<CategoryProduct_Characteristics[]>(
      `${this.url_server}catalog/category/characteristics`
    );
  }
}
