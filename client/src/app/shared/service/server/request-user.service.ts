import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { userResponse } from "src/app/shared/interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestUserService {
  constructor(private http: HttpClient) {}

  private url_server: string = `http://${environment.HOST}${environment.PORT}/api`;

  getInfoAccountUser(): Observable<userResponse> {
    return this.http.get<userResponse>(`${this.url_server}/account/user`);
  }

  userUpInfo(newUser: FormData, id: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.url_server}/account/user/${id}`,
      newUser
    );
  }
}
