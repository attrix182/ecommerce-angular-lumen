import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@app/components/nav/nav.component';
import { CartComponent } from '@app/components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    NavComponent,
    CartComponent
  ]
})
export class SharedModule { }
