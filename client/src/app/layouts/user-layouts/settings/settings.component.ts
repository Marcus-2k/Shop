import { Component, OnInit } from "@angular/core";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { OpenSnackBarService } from "src/app/shared/service/open-snack-bar.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  constructor(
    private renameTitle: RenameTitleService,
    private requestUser: RequestUserService,
    private showMessage: OpenSnackBarService
  ) {}

  ngOnInit(): void {
    this.renameTitle.renameTitleSite("Налаштування");
  }

  minPassword: number = 5;
  maxPassword: number = 24;

  password: string = "";
  hidePassword: boolean = true;

  repeatPassword: string = "";
  hideRepeatPassword: boolean = true;

  oldPassword: string = "";
  hideOldPassword: boolean = true;

  buttonValidity: boolean = false;
  submitForm() {
    this.buttonValidity = true;
    this.requestUser.editPassword(this.password, this.oldPassword).subscribe(
      (response) => {
        console.log(response);
        if (response.message) {
          this.showMessage.open("Пароль успішно змінено", undefined);
          this.buttonValidity = false;
        } else {
          this.showMessage.open("Пароль введено не вірно", undefined);
          this.buttonValidity = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
