import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestNewsService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/`;

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.url_server}news/`);
  }
}
