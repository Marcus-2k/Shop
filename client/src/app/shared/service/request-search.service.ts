import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestSearchService {
  constructor(private http: HttpClient) {}

  private url_server = `http://${environment.HOST}${environment.PORT}/api`;

  search(title: string): Observable<any> {
    return this.http.get<any>(`${this.url_server}/search?search_text=${title}`);
  }
}
