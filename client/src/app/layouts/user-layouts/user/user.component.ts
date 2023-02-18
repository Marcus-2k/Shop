import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { User_Account } from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

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
    console.log("Start ngOnInit User");

    this.requestUser.getUserInfo().subscribe(
      (response: User_Account) => {
        console.log(response);

        localStorage.setItem("_id", response._id);

        this.user_account = response;

        if (response.avatar !== null) {
          this.user_avatar = response.avatar;
          this.imagePreview = response.avatar;
        }

        this.user_name = response.name;

        if (response.lastName !== null) {
          this.user_lastName = response.lastName;
        }

        this.user_email = response.email;

        if (response.birthday !== null) {
          this.user_birthday = response.birthday;
        }

        if (response.country !== null) {
          this.user_country = response.country;
        }

        this.loader = false;
      },
      (error: Error) => {
        console.log(error);
        this.showNotice.message(error.message);

        this.loader = false;
      }
    );

    this.renameTitle.renameTitleSite("Кабінет");
  }
  // General variables START =======================================================================
  loader: boolean = true;

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  date: Date = new Date();
  time: number = this.date.getHours();
  // General variables END =========================================================================
  // User info START ===============================================================================

  // User information
  user_account: User_Account | undefined = undefined;

  // Avatar
  user_avatar: string | null = null;

  images: File | null = null;
  imagePreview: ArrayBuffer | string | null = null;

  @ViewChild("load_avatar") load_avatar: ElementRef | undefined = undefined;

  clickLoadAvatar() {
    this.load_avatar?.nativeElement.click();
  }
  onFileUpload(event: any) {
    console.log(event.target.files);

    const file = event.target.files[0];
    this.images = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }
  deleteUserAvatar() {
    this.images = null;
    this.imagePreview = null;
  }

  // Name
  user_name: string = "";
  minLengthName: number = 4;
  maxLengthName: number = 20;

  // Last Name
  user_lastName: string = "";
  minLengthLastName: number = 4;
  maxLengthLastName: number = 20;

  // Email
  user_email: string = "";

  // Birthday
  user_birthday: Date | null = null;
  presentDay = new Date(
    this.date.getFullYear(),
    this.date.getMonth(),
    this.date.getDate() + 1
  )
    .toISOString()
    .split("T")[0];

  // Country
  user_country: string | null = null;
  countryList: string[] = [
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
  // User info END =================================================================================

  updateUser() {
    const updateUserInfo = new FormData();

    if (this.images) {
      updateUserInfo.append("image", this.images, this.images.name);
    } else if (this.imagePreview === null && this.user_avatar !== null) {
      updateUserInfo.append("image", "");
    }

    if (this.user_name !== this.user_account?.name) {
      updateUserInfo.append("name", this.user_name);
    }

    if (
      this.user_lastName.length >= this.minLengthLastName &&
      this.user_account?.lastName === null
    ) {
      updateUserInfo.append("lastName", this.user_lastName);
    } else if (
      this.user_lastName !== this.user_account?.lastName &&
      this.user_lastName.length >= this.minLengthLastName
    ) {
      updateUserInfo.append("lastName", this.user_lastName);
    }

    // if (this.user.email !== this.newUser.email) {
    //    newUser.append("email", this.newUser.email);
    // }

    if (this.user_birthday !== this.user_account?.birthday) {
      if (this.user_birthday === null) {
        updateUserInfo.append("birthday", "");
      } else {
        updateUserInfo.append("birthday", this.user_birthday.toString());
      }
    }

    if (this.user_country !== this.user_account?.country) {
      if (this.user_country === null) {
        updateUserInfo.append("country", "");
      } else {
        updateUserInfo.append("country", this.user_country);
      }
    }

    this.requestUser.upUserInfo(updateUserInfo).subscribe(
      (response) => {
        this.showNotice.message(response.message);
      },
      (error: Error) => {
        console.log(error);
        this.showNotice.message(error.message);
      }
    );
  }
}
