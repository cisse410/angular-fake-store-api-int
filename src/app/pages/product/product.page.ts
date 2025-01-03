import { Component, inject, OnInit } from '@angular/core';
import { ProductCardSkeletonComponent } from '../../components/product-card-skeleton/product-card-skeleton.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent, ProductCardSkeletonComponent],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ProductPage implements OnInit {
  productSerrvice = inject(ProductService);
  products: Product[] = [];
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  isLoading = true;

  ngOnInit() {
    this.productSerrvice.getProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false; // Handle error case
      },
    });
  }

  // product$ = this.productSerrvice.getProducts();
}
