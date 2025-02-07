import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CakeDetailComponent } from './pages/cake-detail/cake-detail.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cake/:id', component: CakeDetailComponent },
  { path: 'cart', component: CartComponent },
];