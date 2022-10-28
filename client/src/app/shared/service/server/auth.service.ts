import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { UserLogin, UserRegister } from "../../interface/interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private token: string | null = null;

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  private url_server: string = `http://${this.HOST}${this.PORT}/api`;

  register(
    user: UserRegister
  ): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http
      .post<{ accessToken: string; refreshToken: string }>(
        `${this.url_server}/auth/register`,
        user,
        { withCredentials: true }
      )
      .pipe(
        tap(({ accessToken }) => {
          localStorage.setItem("auth-token", accessToken);
          this.setToken(accessToken);
        })
      );
  }

  login(
    user: UserLogin
  ): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http
      .post<{ accessToken: string; refreshToken: string }>(
        `${this.url_server}/auth/login`,
        user,
        { withCredentials: true }
      )
      .pipe(
        tap(({ accessToken }) => {
          localStorage.setItem("auth-token", accessToken);
          this.setToken(accessToken);
        })
      );
  }

  checking(): Observable<{ authorization: boolean }> {
    return this.http.get<{ authorization: boolean }>(
      `${this.url_server}/auth/checking`,
      { withCredentials: true }
    );
  }

  refresh(): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http
      .get<{ accessToken: string; refreshToken: string }>(
        `${this.url_server}/auth/refresh`,
        { withCredentials: true }
      )
      .pipe(
        tap(({ accessToken }) => {
          localStorage.setItem("auth-token", accessToken);
          this.setToken(accessToken);
        })
      );
  }

  logout(): Observable<any> {
    return this.http
      .get<any>(`${this.url_server}/auth/logout`, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.setToken(null);
          localStorage.removeItem("auth-token");
          localStorage.removeItem("_id");
        })
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
