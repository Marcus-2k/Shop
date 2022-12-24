import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";

import { AuthService } from "../service/server/auth.service";
import { OpenSnackBarService } from "../service/open-snack-bar.service";
import { OpenDialogService } from "../service/open-dialog.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router,
    private openDialog: OpenDialogService,
    private openSnackBar: OpenSnackBarService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.auth.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigate([""]);

      this.openDialog.openLoginWindow();
      this.openSnackBar.open("Потрібно авторизуватися.", undefined);

      return of(false);
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}
