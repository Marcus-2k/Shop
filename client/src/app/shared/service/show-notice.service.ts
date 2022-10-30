import { Injectable } from "@angular/core";

declare const M: any;

@Injectable({
  providedIn: "root",
})
export class ShowNoticeService {
  constructor() {}

  message(message: string) {
    M.toast({ html: message });
  }
}
