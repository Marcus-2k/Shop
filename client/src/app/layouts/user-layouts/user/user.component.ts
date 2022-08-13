import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";
import { User } from "src/app/shared/interface/interfaces";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(
    private requestUser: RequestUserService,
    private showNotice: ShowNoticeService,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit USER");

    this.requestUser.getUserInfo().subscribe(
      (response) => {
        this.user = response;

        if (response.avatar !== null) {
          this.imagePreview = response.avatar;
        }
        this.newUser.avatar = response.avatar;
        this.newUser.name = response.name;
        this.newUser.lastName = response.lastName;
        this.newUser.email = response.email;
        this.newUser.country = response.country;
        this.newUser.birthday = response.birthday;

        this.loader = false;
        //
        this.renameTitle.renameTitleSite("Кабінет");
      },
      (e) => {
        this.showNotice.message(e.message);
      }
    );
  }

  // User === START
  user: User = {
    avatar: null,
    name: "",
    lastName: "",
    email: "",
    birthday: "",
    country: "",
  };

  newUser: User = {
    avatar: null,
    name: "",
    lastName: "",
    email: "",
    birthday: "",
    country: "",
  };
  // User === END

  loader: boolean = true;

  // Developer mode === START
  private HOST: string = "localhost";
  private PORT: string = ":5000";
  url_server: string = `http://${this.HOST}${this.PORT}/`;
  // Developer mode === END

  // Avatar user === START
  @ViewChild("fileAvatar") fileAvatar?: ElementRef;

  images?: File;
  imagePreview: any;

  addAvatar() {
    this.fileAvatar?.nativeElement.click();
    // console.log(this.user);
    console.log(this.time);

    console.log(this.newUser);
  }

  onFileUpload(event: any) {
    // console.log(event.target.files);

    const file = event.target.files[0];
    this.images = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
      this.newUser.avatar = reader.result;
      this.url_server = "";
    };

    reader.readAsDataURL(file);
  }

  deleteAvatar() {
    this.images = undefined;
    this.imagePreview = undefined;
    this.newUser.avatar = "";
    console.log(this.user);
    console.log(this.newUser);
  }
  // Avatar user === END

  // Date === START
  date: Date = new Date();
  time: number = this.date.getHours();

  // Max-date birthday for user === START
  maxDate = new Date(
    this.date.getFullYear(),
    this.date.getMonth(),
    this.date.getDate() + 1
  )
    .toISOString()
    .split("T")[0];
  // Max-date birthday for user === END
  // Date === END

  // Select country === START
  countryList: string[] = [
    "No country",
    "Ukraine",
    "Poland",
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Netherlands",
    "USA",
    "Turkey",
    "Japan",
    "China",
    "Mexico",
  ];
  // Select country === END

  // Save info about user === START
  saveInfo() {
    const newUser = new FormData();

    if (this.images) {
      newUser.append("image", this.images, this.images.name);
    } else if (this.newUser.avatar === "") {
      newUser.append("image", "");
    }

    if (this.user.name !== this.newUser.name) {
      newUser.append("name", this.newUser.name);
    }
    if (this.user.lastName !== this.newUser.lastName) {
      newUser.append("lastName", this.newUser.lastName);
    }
    // if (this.user.email !== this.newUser.email) {
    //   newUser.append("email", this.newUser.email);
    // }
    if (this.user.birthday !== this.newUser.birthday) {
      newUser.append("birthday", this.newUser.birthday);
    }
    if (this.user.country !== this.newUser.country) {
      newUser.append("country", this.newUser.country);
    }

    this.requestUser.userUpInfo(newUser).subscribe(
      (response) => {
        this.showNotice.message(response.message);

        // this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
        // this.router.onSameUrlNavigation = "reload";
        // this.router.navigate(["/account/user"], {});
      },
      (error) => {
        this.showNotice.message(error.message);
      }
    );
  }
  // Save info about user === END
}
