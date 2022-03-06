import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from '@auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
