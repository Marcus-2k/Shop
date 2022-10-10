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

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: String(this.auth.getToken()),
        },
      });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (
          err.status === 401 &&
          err.url !== "http://localhost:5000/api/auth/refresh"
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
          err.url === "http://localhost:5000/api/auth/refresh"
        ) {
          return this.auth.logout().pipe(
            tap(() => {
              this.router.navigate(["/login"], {
                queryParams: {
                  sessionFail: true,
                },
              });
            })
          );
        } else {
        }
        return throwError(err);
      })
    );
  }
}
