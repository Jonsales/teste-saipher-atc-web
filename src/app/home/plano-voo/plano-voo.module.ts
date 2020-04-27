import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoVooDetalhesComponent } from './plano-voo-detalhes/plano-voo-detalhes.component';
import { PlanoVooRouting } from './plano-voo.routing';
import { PlanoVooComponent } from './plano-voo.component';
import { FormsModule } from '@angular/forms';
import { PlanoVooService } from 'src/app/_shared/_services/services/plano-voo.service';
import { TableModule } from 'src/app/_shared/_components/table/table.module';

@NgModule({
  declarations: [
    PlanoVooComponent, 
    PlanoVooDetalhesComponent
  ],
  imports: [
    CommonModule,
    PlanoVooRouting,
    FormsModule,
    TableModule
  ],
  providers: [
    PlanoVooService
  ]
})
export class PlanoVooModule { }
