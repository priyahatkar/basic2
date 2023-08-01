import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';
import { DumyComponent } from './shared/components/dumy/dumy.components';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    DumyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
