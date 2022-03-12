import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@app/components/nav/nav.component';
import { CartComponent } from '@app/components/cart/cart.component';



@NgModule({
  declarations: [
    NavComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NavComponent,
    CartComponent
  ]
})
export class SharedModule { }
