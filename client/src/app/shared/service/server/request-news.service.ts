import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "../../interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestNewsService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "news/";

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.url_server}`);
  }
}
