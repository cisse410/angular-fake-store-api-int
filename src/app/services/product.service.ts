import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  baseApiUrl = 'https://fakestoreapi.com/products';

  getProducts() {
    return this.http.get<Product[]>(this.baseApiUrl);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.baseApiUrl}/${id}`);
  }
}
