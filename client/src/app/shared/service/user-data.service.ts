import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  constructor() {}

  favoriteNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  favoriteListUser: string[] = [];

  shoppingCartNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  shoppingCartListUser: string[] = [];
}
