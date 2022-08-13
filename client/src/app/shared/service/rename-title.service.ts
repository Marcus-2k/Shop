import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RenameTitleService {
  constructor() {}

  renameTitleSite(name: string) {
    const titleCollection = document.getElementsByTagName("title");
    const title = Array.from(titleCollection);
    let nameSplit = name.split("");
    nameSplit[0] = nameSplit[0].toUpperCase();
    let newName = nameSplit.join("");
    title[0].innerText = newName;
  }
}
