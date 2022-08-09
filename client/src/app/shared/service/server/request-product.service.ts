import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestProductService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/account`;

  getUserProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url_server}/product/`);
  }

  getByIdforUpdate(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url_server}/product/${id}`);
  }

  updateById(upProduct: any, id: any): Observable<any> {
    return this.http.patch<any>(`${this.url_server}/product/${id}`, upProduct);
  }

  deleteById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.url_server}/product/${id}`
    );
  }

  createProduct(product: any): Observable<Product> {
    return this.http.post<any>(`${this.url_server}/product/`, product);
  }
}
