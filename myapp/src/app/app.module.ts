import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { EcomComponent } from './ecom/ecom.component';
import { CartComponent } from './ecom/cart/cart.component';
import { EcomproductComponent } from './ecom/ecomproduct/ecomproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    EcomComponent,
    CartComponent,
    EcomproductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
