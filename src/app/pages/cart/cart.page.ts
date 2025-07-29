import { Component } from '@angular/core';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.css',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CartPage {}
