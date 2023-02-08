import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartPageComponent,
    AppComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
