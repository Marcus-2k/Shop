import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Card } from "../../interface/card/card.interfaces";
import {
  ProductAccessories,
  ProductCharacteristics,
  ProductComments,
  ProductInfo,
  ProductPhoto,
  ProductQuestions,
} from "../../interface/interfaces";
import { PRODUCTS } from "../db/products";

@Injectable({ providedIn: "root" })
export class RequestCardService {
  public constructor(private http: HttpClient) {}

  private url_server: string = environment.URL_SERVER_API + "card/";

  getByIdCard(id: string): Observable<Card> {
    const product: any = PRODUCTS.find((item) => item._id === id);

    return new BehaviorSubject({
      widget_breadcrumbs: {
        first: { name: "Ноутбуки та комп'ютери", link: "" },
        second: { name: "Ноутбуки", link: "" },
        third: undefined,
        location: product ? { name: product.name, link: "" } : undefined,
      },
      product: product,
    } as Card);

    // return this.http.get<Card>(`${this.url_server}${id}`);
  }

  getByIdCardInfo(id: string): Observable<ProductInfo> {
    const product: any = PRODUCTS.find((item) => item._id === id);

    return new BehaviorSubject(product);
    // return this.http.get<ProductInfo>(`${this.url_server}${id}/info`);
  }

  getByIdCardCharacteristics(id: string): Observable<ProductCharacteristics> {
    const product: any = PRODUCTS.find((item) => item._id === id);

    return new BehaviorSubject(product);

    // const characteristicsName = []
    // this.categoryService.getCharacteristicsByCategory(product.category)[0];

    // return new BehaviorSubject({characteristics: product.characteristics,characteristicsName: });

    // return this.http.get<ProductCharacteristics>(
    //   `${this.url_server}${id}/characteristics`
    // );
  }

  getByIdCardComments(id: string): Observable<ProductComments> {
    const product: any = PRODUCTS.find((item) => item._id === id);

    return new BehaviorSubject(product);
    // return this.http.get<ProductComments>(`${this.url_server}${id}/comments`);
  }

  getByIdCardQuestions(id: string): Observable<ProductQuestions> {
    const product: any = PRODUCTS.find((item) => item._id === id);

    return new BehaviorSubject(product);
    // return this.http.get<ProductQuestions>(`${this.url_server}${id}/questions`);
  }

  getByIdCardPhoto(id: string): Observable<ProductPhoto> {
    const product: any = PRODUCTS.find((item) => item._id === id);

    return new BehaviorSubject(product);
    // return this.http.get<ProductPhoto>(`${this.url_server}${id}/photo`);
  }

  getByIdCardAccessories(id: string): Observable<ProductAccessories> {
    const product: any = PRODUCTS.find((item) => item._id === id);

    return new BehaviorSubject(product);
    // return this.http.get<ProductAccessories>(
    //   `${this.url_server}${id}/accessories`
    // );
  }
}
