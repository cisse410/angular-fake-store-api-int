import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;

    this.cartService.getCartItem('1').subscribe((items) => {
      if (Array.isArray(items)) {
        for (const item of items) {
          total += item.price;
        }
      } else if (items) {
        total += items.price;
      }
    });

    return total;
  });

  cartItem$ = this.cartService.getCartItem('1');
  $cartItem = toSignal(this.cartItem$);
}
