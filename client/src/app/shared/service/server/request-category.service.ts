import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CATEGORY, CHARACTERISTICS } from "../../interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestCategoryService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "category/";

  getCategory(): Observable<CATEGORY[]> {
    return this.http.get<CATEGORY[]>(`${this.url_server}`);
  }
  getCharacteristics(category: string): Observable<CHARACTERISTICS[]> {
    return this.http.post<CHARACTERISTICS[]>(
      `${this.url_server}characteristics`,
      { category: category }
    );
  }
}
