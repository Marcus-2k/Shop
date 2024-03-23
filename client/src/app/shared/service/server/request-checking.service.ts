import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class RequestCheckingService {
  public constructor(private http: HttpClient) {}

  public url_server: string = environment.URL_SERVER_API + "checking/";

  public checkingStatusServer(): Observable<{ message: string }> {
    return new BehaviorSubject({ message: "Server work" });

    // return this.http.get<{ message: string }>(
    //   `${this.url_server}status-server`,
    //   { withCredentials: true }
    // );
  }
}
