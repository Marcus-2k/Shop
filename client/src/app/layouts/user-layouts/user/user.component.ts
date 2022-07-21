import {
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { ErrorHandlerService } from 'src/app/shared/error/error-handler.service';
import {
  oldUserResponse,
  userResponse,
} from 'src/app/shared/interface/interfaces';
import { RequestUserService } from 'src/app/shared/service/request-user.service';
import { ShowErrorService } from 'src/app/shared/service/show-error.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, DoCheck {
  constructor(
    private requestUser: RequestUserService,
    private error: ErrorHandlerService,
    private showError: ShowErrorService
  ) {}

  ngOnInit(): void {
    this.requestUser.getInfoAccountUser().subscribe(
      (res) => {
        // ID
        this.user._id = res._id;
        // Avatar
        this.imagePreview = res.avatar.replace(/\\/g, '/');
        this.user.avatar = res.avatar.replace(/\\/g, '/');
        this.oldUser.avatar = res.avatar.replace(/\\/g, '/');
        // Name
        this.user.name = res.name;
        this.oldUser.name = res.name;
        // Last Name
        this.user.lastName = res.lastName;
        this.oldUser.lastName = res.lastName;
        // Last Email
        this.user.email = res.email;
        // Last Birthday
        this.user.birthday = res.birthday;
        this.oldUser.birthday = res.birthday;
        // Last Country
        this.user.country = res.country;
        this.oldUser.country = res.country;
      },
      (e) => {
        this.error.checkError(e);
      }
    );
  }

  ngDoCheck(): void {
    // console.log(this.selectCountry);
    // console.log(this.selectCountry?.nativeElement.value);
    // console.log(this.user.name === this.oldUser.name);
    // console.log(!this.images);
  }

  // User  === START
  user: userResponse = {
    _id: null,
    avatar: '',
    name: null,
    lastName: null,
    email: null,
    birthday: null,
    country: 0,
  };

  oldUser: oldUserResponse = {
    avatar: '',
    name: null,
    lastName: null,
    birthday: null,
    country: 0,
  }; // User  === END

  date: Date = new Date();
  time: number = this.date.getHours();

  // Developer mode === START
  UrlServer = 'http://localhost:5000/';
  // Developer mode === END

  // Avatar user === START
  resetImg: boolean = false;
  deleteImg: boolean = false;

  resetAvatar() {
    if (this.images) {
      // this.resetImg = true;
      console.log(typeof this.images);
      console.log(this.oldUser);
      console.log(this.user);
      this.UrlServer = 'http://localhost:5000/';
      this.images = undefined;
      this.imagePreview = this.oldUser.avatar;
    }
  } // Reset Avatar user

  deleteAvatar() {
    // this.deleteImg = true;
    // this.oldUser.avatar = '';
    // this.UrlServer = '';
    // this.images = undefined;
    // this.imagePreview = '';
  } // Delete Avatar user

  @ViewChild('fileAvatar') fileAvatar?: ElementRef;

  images?: File;
  imagePreview: any;

  addAvatar() {
    this.fileAvatar?.nativeElement.click();
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.images = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
    // Othe
    this.UrlServer = '';
  } // Avatar user === END

  // Max-date birthday for user === START
  maxYear = this.date.getFullYear();
  maxMonth: string | number = this.date.getMonth();
  maxDate = this.date.getDate();
  maxInputDate?: string;

  editDate: boolean = false;

  editDateBtn() {
    this.maxMonth = Number(this.maxMonth) + 1;

    if (this.maxMonth < 10 || this.maxMonth >= 1) {
      this.maxMonth = `0${this.maxMonth}`;
    }

    this.maxInputDate = `${this.maxYear}-${this.maxMonth}-${this.maxDate}`;

    if (this.editDate === false) {
      this.editDate = true;
    } else if (this.editDate === true) {
      this.editDate = false;
    }
  }
  resetDate() {
    this.editDate = false;
    this.user.birthday = this.oldUser.birthday;
  } // Max-date birthday for user === END

  // Select country === START
  countryList: string[] = [
    'No country',
    'Ukraine',
    'Poland',
    'United Kingdom',
    'France',
    'Germany',
    'Italy',
    'Spain',
    'Netherlands',
    'USA',
    'Turkey',
    'Japan',
    'China',
    'Mexico',
  ]; // Select country === END

  // Save info about user === START
  saveInfo() {
    if (this.user._id) {
      const newUser = new FormData();

      const id = this.user._id; // Which user to edit

      if (this.images) {
        newUser.append('image', this.images, this.images.name);
      }
      // else if (this.oldUser.avatar !== this.user.avatar) {
      // console.log('sdsdsdsdsdsadasdasdadadadasd');
      // } // Add Avatar

      if (this.user.birthday) {
        newUser.append('birthday', this.user.birthday);
      } // Add Birthday

      if (
        (this.user.name && this.user.name.length >= 4) ||
        (this.user.name && this.user.name.length == 0)
      ) {
        newUser.append('name', this.user.name);
      } else {
        this.showError.toasts("Не корректне Ім'я");
        return;
      } // Add Name

      if (this.user.lastName && this.user.lastName.length >= 4) {
        newUser.append('lastName', this.user.lastName);
      } else {
        this.showError.toasts('Не корректне Прізвище');
        return;
      } // Add Last Name

      if (this.user.country) {
        newUser.append('country', String(this.user.country));
      } // Add Country

      this.requestUser.userUpInfo(newUser, id).subscribe(
        (res) => {
          this.showError.toasts(res.message);
        },
        (e) => {
          this.showError.toasts(e.message);
        }
      );
    }
  } // Save info about user === END
}
