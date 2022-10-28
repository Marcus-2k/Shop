import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  ProductCard,
  ProductInfo,
  ProductCharacteristics,
  ProductComments,
  ProductQuestions,
  ProductAccessories,
  ProductPhoto,
} from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestCardService {
  constructor(private http: HttpClient) {}

  private HOST: string = "185.235.218.108";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/card`;

  getByIdCard(id: string): Observable<ProductCard> {
    return this.http.get<ProductCard>(`${this.url_server}/${id}`);
  }

  getByIdCardInfo(id: string): Observable<ProductInfo> {
    return this.http.get<ProductInfo>(`${this.url_server}/${id}/info`);
  }

  getByIdCardCharacteristics(id: string): Observable<ProductCharacteristics> {
    return this.http.get<ProductCharacteristics>(
      `${this.url_server}/${id}/characteristics`
    );
  }

  getByIdCardComments(id: string): Observable<ProductComments> {
    return this.http.get<ProductComments>(`${this.url_server}/${id}/comments`);
  }

  getByIdCardQuestions(id: string): Observable<ProductQuestions> {
    return this.http.get<ProductQuestions>(
      `${this.url_server}/${id}/questions`
    );
  }

  getByIdCardPhoto(id: string): Observable<ProductPhoto> {
    return this.http.get<ProductPhoto>(`${this.url_server}/${id}/photo`);
  }

  getByIdCardAccessories(id: string): Observable<ProductAccessories> {
    return this.http.get<ProductAccessories>(
      `${this.url_server}/${id}/accessories`
    );
  }
}
