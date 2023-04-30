import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, tap } from "rxjs";

import { UserLogin, UserRegister } from "../../interface/interfaces";

import { Store } from "@ngrx/store";

import { environment } from "src/environments/environment";
import { OrderActions } from "src/app/store/orders/order.action";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private store$: Store) {}

  private token: string | null = null;

  url_server: string = environment.URL_SERVER_API + "auth/";

  register(
    user: UserRegister
  ): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http
      .post<{ accessToken: string; refreshToken: string }>(
        `${this.url_server}register`,
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
        `${this.url_server}login`,
        user,
        { withCredentials: true }
      )
      .pipe(
        tap(({ accessToken }) => {
          localStorage.setItem("auth-token", accessToken);
          this.setToken(accessToken);

          this.store$.dispatch(OrderActions.clearOrder());
        })
      );
  }

  checking(): Observable<{ authorization: boolean; message: string }> {
    return this.http.get<{ authorization: boolean; message: string }>(
      `${this.url_server}checking`,
      { withCredentials: true }
    );
  }

  refresh(): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http
      .get<{ accessToken: string; refreshToken: string }>(
        `${this.url_server}refresh`,
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
      .get<any>(`${this.url_server}logout`, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.setToken(null);

          localStorage.removeItem("auth-token");
          localStorage.removeItem("_id");

          this.store$.dispatch(OrderActions.clearOrder());
        })
      );
  }

  setToken(token: string | null) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
