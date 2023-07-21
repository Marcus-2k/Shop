import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestCheckingService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "checking/";

  checkingStatusServer(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(
      `${this.url_server}status-server`,
      { withCredentials: true }
    );
  }
}
