import { Injectable } from "@angular/core";

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class OpenSnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  private horizontalPosition: MatSnackBarHorizontalPosition = "end";
  private verticalPosition: MatSnackBarVerticalPosition = "top";
  private duration: number = 5;

  open(message: string, action: string | undefined = "ОК") {
    this._snackBar.open(message, action, {
      duration: this.duration * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
