import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Seller } from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestSellerService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/`;

  getSeller(): Observable<Seller[]> {
    return this.http.get<Seller[]>(`${this.url_server}seller/`);
  }

  getSellerById(id: string): Observable<Seller> {
    return this.http.get<Seller>(`${this.url_server}seller/${id}`);
  }
}
