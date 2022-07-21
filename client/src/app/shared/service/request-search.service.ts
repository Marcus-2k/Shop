import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RequestSearchService {
  constructor(private http: HttpClient) {}

  UrlServer: string = 'http://localhost:5000/api';

  getBySearch(
    title: string
  ): Observable<{ resProduct: Product[]; resCategory: [] }> {
    return this.http.get<{ resProduct: Product[]; resCategory: [] }>(
      // `http://localhost:5000/api/search?searchtext=qwerty&categoryid=123w`
      `http://localhost:5000/api/search/1231232?search=value`
    );
  }

  // getBySearch(
  //   title: string
  // ): Observable<{ resProduct: Product[]; resCategory: [] }> {
  //   return this.http.get<{ resProduct: Product[]; resCategory: [] }>(
  //     `${this.UrlServer}/search/?search_text=${title}`
  //   );
  // }

  // getByFilterSearch(title: string, categoryId: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(
  //     `${this.UrlServer}/search/?search_text=${title}&categoryId=${categoryId}`
  //   );
  // }
}
