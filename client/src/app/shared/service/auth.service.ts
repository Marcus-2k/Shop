import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { UserLogin, UserRegister } from "../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private token: string | null = null;

  private url_server = `http://${environment.HOST}${environment.PORT}/api`;

  category(): Observable<any> {
    return this.http.get<any>(`${this.url_server}/category`);
  }

  register(user: UserRegister): Observable<any> {
    return this.http.post<any>(`${this.url_server}/auth/register`, user);
  }

  login(user: UserLogin): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.url_server}/auth/auth/login`, user)
      .pipe(
        tap(({ token }) => {
          localStorage.setItem("auth-token", token);
          this.setToken(token);
        })
      );
  }

  logout(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(
      `${this.url_server}/auth/auth/logout`
    );
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
