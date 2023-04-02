import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";

import { Card } from "../interface/card/card.interfaces";

import { RequestCardService } from "src/app/shared/service/server/request-card.service";

@Injectable({ providedIn: "root" })
export class CardResolver implements Resolve<Card> {
  constructor(
    private requestCard: RequestCardService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Card> | Promise<Card> | Card {
    console.log("Start Card Resolver");

    return this.requestCard.getByIdCard(route.params["id"]).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.router.navigate(["/404"]);
        }
        return throwError(() => error);
      })
    );
  }
}
