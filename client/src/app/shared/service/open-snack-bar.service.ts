import { Injectable } from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class OpenSnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  private horizontalPosition: "start" | "center" | "end" | "left" | "right" =
    "end";
  private verticalPosition: "top" | "bottom" = "top";
  private duration: number = 5;

  open(message: string, action: string | undefined) {
    this._snackBar.open(message, action, {
      duration: this.duration * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
