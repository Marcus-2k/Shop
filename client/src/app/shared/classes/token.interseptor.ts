import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { catchError, Observable, switchMap, tap, throwError } from "rxjs";

import { AuthService } from "../service/server/auth.service";

import { OpenDialogService } from "../service/open-dialog.service";
import { OpenSnackBarService } from "../service/open-snack-bar.service";

import { environment } from "src/environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private router: Router,
    private openDialog: OpenDialogService,
    private openSnackBar: OpenSnackBarService
  ) {}

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server: string = `http://${this.HOST}${this.PORT}/api`;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      if (req.url.split("/")[2] !== "api.novaposhta.ua") {
        req = req.clone({
          setHeaders: {
            Authorization: String(this.auth.getToken()),
          },
        });
      }
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (
          err.status === 401 &&
          err.url !== `${this.url_server}/auth/refresh`
        ) {
          return this.auth.refresh().pipe(
            switchMap((res) => {
              this.auth.setToken(res.accessToken);
              localStorage.setItem("auth-token", res.accessToken);

              return next.handle(
                req.clone({
                  setHeaders: {
                    Authorization: String(this.auth.getToken()),
                  },
                })
              );
            })
          );
        } else if (
          err.status === 401 &&
          err.url === `${this.url_server}/auth/refresh`
        ) {
          return this.auth.logout().pipe(
            tap(() => {
              this.router.navigate(["/"]);

              setTimeout(() => {
                this.openDialog.openLoginWindow();
                this.openSnackBar.open("Потрібно авторизуватися.", undefined);
              }, 250);
            })
          );
        } else {
          return throwError(() => err);
        }
      })
    );
  }
}
