import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { Redirect } from "../interface/interfaces";

import { LoginComponent } from "src/app/layouts/login/login.component";
import { RegisterComponent } from "src/app/layouts/register/register.component";
import { OpenSnackBarService } from "./open-snack-bar.service";

@Injectable({
  providedIn: "root",
})
export class OpenDialogService {
  constructor(
    private routre: Router,
    public dialog: MatDialog,
    private openSnackBar: OpenSnackBarService
  ) {}

  openLoginWindow() {
    const dialogRef: MatDialogRef<LoginComponent, Redirect | undefined> =
      this.dialog.open(LoginComponent, {
        width: "600px",
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.redirectTo === "register") {
          this.openRegisterWindow();
        }
        if (result.error === "user_authorized") {
          this.openSnackBar.open("Ви вже авторизовані в системі.", undefined);
        }

        if (result.success === "authorized") {
          this.openSnackBar.open("Авторизація успішна.", undefined);
          this.routre.navigate(["/account/user"]);
        }
      }
    });
  }

  openRegisterWindow() {
    const dialogRef: MatDialogRef<RegisterComponent | undefined> =
      this.dialog.open(RegisterComponent, {
        width: "600px",
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.redirectTo === "login") {
          this.openLoginWindow();
        }
        if (result.error === "user_registered") {
          this.openSnackBar.open(
            "Щоб створити новий акаунт, потрібно завершити сесію.",
            undefined
          );
        } else if (result.success === "registered") {
          this.openSnackBar.open("Реєстрація успішна.", undefined);
          this.routre.navigate(["/account/user"]);
        }
      }
    });
  }
}
