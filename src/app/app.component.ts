import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPage } from './pages/product/product.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fake-store-api-int';
}
