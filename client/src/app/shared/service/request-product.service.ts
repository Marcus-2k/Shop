import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RequestProductService {
  constructor(private http: HttpClient) {}

  UrlServer: string = 'http://localhost:5000/api';

  getUserProduct(): Observable<any> {
    return this.http.get<Product>(`${this.UrlServer}/product`);
  }

  getByIdforUpdate(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.UrlServer}/product/${id}`);
  }

  updateById(upProduct: any, id: any): Observable<any> {
    return this.http.patch<any>(`${this.UrlServer}/product/${id}`, upProduct);
  }

  deleteById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.UrlServer}/product/${id}`
    );
  }

  createProduct(product: any): Observable<Product> {
    return this.http.post<any>(`${this.UrlServer}/product`, product);
  }
}
