import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestCardService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/card`;

  getByIdCard(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url_server}/${id}`);
  }

  getByIdCardInfo(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url_server}/info/${id}`);
    // return this.http.get<Product>(`${this.url_server}/${id}/info`);
  }
}
