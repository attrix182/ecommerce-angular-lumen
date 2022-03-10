import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from '@auth/auth.module';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductCardComponent } from './components/products-grid/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlidebarComponent,
    ProductsGridComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
