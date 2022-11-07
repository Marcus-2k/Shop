import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  constructor() {}

  shoppingCartNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  shoppingCartListUser: string[] = [];
}
