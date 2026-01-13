import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { ProductsPage } from './pages/products/products';
import { Orders } from './pages/orders/orders';
import { Carts } from './pages/carts/carts';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: 'products', component: ProductsPage },
      { path: 'orders', component: Orders },
      {path: 'carts', component: Carts},
      { path: '', pathMatch: 'full', redirectTo: 'products' },
    ],
  },
];
