import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {Error404Component} from './error-404/error-404.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: '**', component: Error404Component},
];
