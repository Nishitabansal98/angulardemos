import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
