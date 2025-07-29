import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  http = inject(HttpClient);
  baseApiUrl = 'https://fakestoreapi.com/products';
  getCartItem(id: string) {
    return this.http.get<Product>(`${this.baseApiUrl}/${id}`);
  }
  product = signal<Product[]>([
    {
      id: '1',
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',

      category: '',
      description: '',
      rating: {
        rate: 0,
        count: 0,
      },
    },
    {
      id: '2',
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',

      category: '',
      description: '',
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ]);

  addProductToCart(pro: Product) {
    this.product.set([...this.product(), pro]);
  }
}
