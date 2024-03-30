import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Seller } from "../../interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class RequestSellerService {
  public constructor(private http: HttpClient) {}

  private url_server: string = environment.URL_SERVER_API + "seller/";

  public getByIdSeller(id: string): Observable<Seller> {
    return new BehaviorSubject({
      name: "Marketplace",
      _id: "sds",
      avatar: "uploads/28092022-154424 405-00011-00004-md.png",
    });
    // return this.http.get<Seller>(`${this.url_server}${id}`);
  }
}
