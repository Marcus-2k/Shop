import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, tap } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestCheckingService {
  constructor(private http: HttpClient) {}

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  private url_server: string = `http://${this.HOST}${this.PORT}/api`;

  checkingStatusServer(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(
      `${this.url_server}/checking/status-server`,
      { withCredentials: true }
    );
  }
}
