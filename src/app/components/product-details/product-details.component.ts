import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productService = inject(ProductService);
  router = inject(ActivatedRoute);
  id = this.router.snapshot.paramMap.get('id')!;

  ngOnInit() {
    console.log(this.router);
    console.log(this.id);
  }
  product$ = this.productService.getProduct(this.id);
  $product = toSignal(this.product$);
}
