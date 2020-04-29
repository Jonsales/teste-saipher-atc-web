import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableItemAcoesComponent } from './table-item-acoes/table-item-acoes.component';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, TableItemAcoesComponent],
  imports: [
    CommonModule,
    NgbTooltipModule
  ],
  exports:[
    TableComponent,
    FormsModule,
    TableItemAcoesComponent
  ]
})
export class TableModule { }
