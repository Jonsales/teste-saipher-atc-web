import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBodyComponent } from './card-body/cards-body.component';

@NgModule({
  declarations: [
    CardBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardBodyComponent
  ]
})
export class CardsModule { }
