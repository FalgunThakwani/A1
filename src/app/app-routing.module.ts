import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', redirectTo: '/cart-page', pathMatch: 'full' },
  { path: 'cart-page', component: CartPageComponent  }
  ,{path: 'checkout', component: CheckoutComponent }
  ,{path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
