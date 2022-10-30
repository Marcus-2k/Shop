import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RenameTitleService {
  constructor() {}

  renameTitleSite(name: string) {
    document.getElementsByTagName("title")[0].innerHTML = name;
  }
}
