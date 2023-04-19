import { Component, OnInit } from "@angular/core";
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { AuthService } from "src/app/shared/service/server/auth.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";

import { Redirect } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private renameTitle: RenameTitleService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Register");

    if (this.auth.isAuthenticated()) {
      this.closeRegisterWindow({
        redirectTo: undefined,
        error: "user_registered",
        success: undefined,
      });
    }

    this.formRegister = new UntypedFormGroup({
      name: new UntypedFormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
        Validators.minLength(4),
      ]),
      email: new UntypedFormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.renameTitle.renameTitleSite("Реєстрація");
  }

  formRegister: UntypedFormGroup | undefined;

  openLoginWindow() {
    this.closeRegisterWindow({
      redirectTo: "login",
      error: undefined,
      success: undefined,
    });
  }

  closeRegisterWindow(config: Redirect | null) {
    this.renameTitle.renameTitleSite("Інтернет-магазин");

    if (config) {
      this.dialogRef.close(config);
    } else {
      this.dialogRef.close();
    }
  }

  onSubmit() {
    if (this.formRegister) {
      this.formRegister.disable();

      this.auth.register(this.formRegister.value).subscribe(
        (response) => {
          console.log(response);
          this.closeRegisterWindow({
            redirectTo: undefined,
            error: undefined,
            success: "registered",
          });
        },
        (error) => {
          console.log(error);

          if (this.formRegister) {
            this.formRegister.enable();
          }
        }
      );
    }
  }
}
