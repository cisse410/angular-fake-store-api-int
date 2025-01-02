import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent, AsyncPipe],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ProductPage {
  productSerrvice = inject(ProductService);

  product$ = this.productSerrvice.getProducts();
}
