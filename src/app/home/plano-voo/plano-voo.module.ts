import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoVooDetalhesComponent } from './plano-voo-detalhes/plano-voo-detalhes.component';
import { PlanoVooRouting } from './plano-voo.routing';
import { PlanoVooComponent } from './plano-voo.component';



@NgModule({
  declarations: [PlanoVooComponent, PlanoVooDetalhesComponent],
  imports: [
    CommonModule,
    PlanoVooRouting
  ]
})
export class PlanoVooModule { }
