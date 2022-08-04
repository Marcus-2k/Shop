import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { userResponse } from "src/app/shared/interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestUserService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/account`;

  getInfoAccountUser(): Observable<userResponse> {
    return this.http.get<userResponse>(`${this.url_server}/user`);
  }

  userUpInfo(newUser: FormData, id: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.url_server}/user/${id}`,
      newUser
    );
  }
}
