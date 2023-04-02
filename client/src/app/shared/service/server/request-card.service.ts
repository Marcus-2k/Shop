import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  ProductInfo,
  ProductCharacteristics,
  ProductComments,
  ProductQuestions,
  ProductAccessories,
  ProductPhoto,
} from "../../interface/interfaces";
import { Card } from "../../interface/card/card.interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestCardService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "card/";

  getByIdCard(id: string): Observable<Card> {
    return this.http.get<Card>(`${this.url_server}${id}`);
  }

  getByIdCardInfo(id: string): Observable<ProductInfo> {
    return this.http.get<ProductInfo>(`${this.url_server}${id}/info`);
  }

  getByIdCardCharacteristics(id: string): Observable<ProductCharacteristics> {
    return this.http.get<ProductCharacteristics>(
      `${this.url_server}${id}/characteristics`
    );
  }

  getByIdCardComments(id: string): Observable<ProductComments> {
    return this.http.get<ProductComments>(`${this.url_server}${id}/comments`);
  }

  getByIdCardQuestions(id: string): Observable<ProductQuestions> {
    return this.http.get<ProductQuestions>(`${this.url_server}${id}/questions`);
  }

  getByIdCardPhoto(id: string): Observable<ProductPhoto> {
    return this.http.get<ProductPhoto>(`${this.url_server}${id}/photo`);
  }

  getByIdCardAccessories(id: string): Observable<ProductAccessories> {
    return this.http.get<ProductAccessories>(
      `${this.url_server}${id}/accessories`
    );
  }
}
