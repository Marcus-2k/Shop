import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OtherDataService {
  constructor() {}

  favoriteNumber: number = 0;
  favoriteListUser: string[] = [];

  cartNumber: number = 0;
}
