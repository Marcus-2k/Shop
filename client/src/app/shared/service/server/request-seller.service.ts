import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Seller } from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestSellerService {
  constructor(private http: HttpClient) {}

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  private url_server: string = `http://${this.HOST}${this.PORT}/api/`;

  // Seller START ==============================================================
  getByIdSeller(id: string): Observable<Seller> {
    return this.http.get<Seller>(`${this.url_server}seller/${id}`);
  }
  // Seller END ================================================================
}
