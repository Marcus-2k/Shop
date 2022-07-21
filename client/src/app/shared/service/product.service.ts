import { Injectable } from '@angular/core';
import { Product } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  // For component search
  loaderP: boolean = true;
  loaderS: boolean = true;

  productList: Product[] = [];
  productUserList: Product[] = [];
}
