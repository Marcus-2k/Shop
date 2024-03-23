import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { News } from "../../interface/interfaces";
import { NEWS } from "../db/news";

@Injectable({ providedIn: "root" })
export class RequestNewsService {
  public constructor(private http: HttpClient) {}

  public url_server: string = environment.URL_SERVER_API + "news/";

  public getAllNews(): Observable<News[]> {
    return new BehaviorSubject(NEWS as any);

    return this.http.get<News[]>(`${this.url_server}`);
  }
}
