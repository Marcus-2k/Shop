import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { UserLogin, UserRegister } from "../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private token: string | null = null;

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api`;

  register(user: UserRegister): Observable<any> {
    return this.http.post<any>(`${this.url_server}/auth/register`, user);
  }

  login(user: UserLogin): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.url_server}/auth/login`, user)
      .pipe(
        tap(({ token }) => {
          localStorage.setItem("auth-token", token);
          this.setToken(token);
        })
      );
  }

  logout(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.url_server}/auth/logout`);
  }

  setToken(token: string | null) {
    this.token = token;
  }

  getToken(): string | null | undefined {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
