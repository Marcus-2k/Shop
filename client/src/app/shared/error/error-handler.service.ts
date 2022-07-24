import { Injectable } from "@angular/core";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  constructor(private auth: AuthService) {}

  checkError(error: any) {
    if (error.error === "Unauthorized") {
      this.auth.logout();
    }
  }
}
