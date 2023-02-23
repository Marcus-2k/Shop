import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Seller } from "../../interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestSellerService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "seller/";
  // Seller START ==============================================================
  getByIdSeller(id: string): Observable<Seller> {
    return this.http.get<Seller>(`${this.url_server}${id}`);
  }
  // Seller END ================================================================
}
