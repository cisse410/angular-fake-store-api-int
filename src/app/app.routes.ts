import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CartPage } from './pages/cart/cart.page';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: AppComponent,
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'products/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'cart',
        component: CartPage,
      },
    ],
  },
];
