import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoVooDetalhesComponent } from './plano-voo-detalhes/plano-voo-detalhes.component';
import { PlanoVooRouting } from './plano-voo.routing';
import { PlanoVooComponent } from './plano-voo.component';
import { FormsModule } from '@angular/forms';
import { PlanoVooService } from 'src/app/_shared/_services/services/plano-voo.service';
import { TableModule } from 'src/app/_shared/_components/table/table.module';
import { NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsModule } from 'src/app/_shared/_components/cards/cards.module';
import { FormDefaultModule } from 'src/app/_shared/_components/form-default/form-default.module';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    PlanoVooComponent, 
    PlanoVooDetalhesComponent
  ],
  imports: [
    CommonModule,
    PlanoVooRouting,
    FormsModule,
    TableModule,
    CardsModule,
    NgbTooltipModule,
    FormDefaultModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    PlanoVooService
  ]
})
export class PlanoVooModule { }
