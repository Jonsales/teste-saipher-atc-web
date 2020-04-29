import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BasePaginateDataModel } from '../../_models/base/base-paginate-data-model';
import { BaseRequestModel } from '../../_models/base/base-request-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() titulos: string[];
  @Input() order: string[];
  @Input() resultPaginate: BasePaginateDataModel<any> = new BasePaginateDataModel<any>();
  @Input() requestPaginate: BaseRequestModel<any>;
  @Output() listarEmiter = new EventEmitter<BaseRequestModel<any>>();
  @Output() pesquisaEmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
      this.resultPaginate = new BasePaginateDataModel<any>();
  }

  counter(i: number) {
    var list = new Array<number>();
    for(var x = 1; x <= i; x++){
      list.push(x);
    }
    return list.reverse();
}

pesquisar(pesquisa: string){
  this.pesquisaEmiter.emit(pesquisa);
}

changePesquisar(pesquisa: string){
  if(pesquisa == '')
    this.pesquisaEmiter.emit(pesquisa);
}

orderBy(index: number){
  var orderBy = this.order[index];
  if(orderBy != undefined){
    if(this.requestPaginate.order.nome == orderBy)
    this.requestPaginate.order.order = this.requestPaginate.order.order == 'desc' ? 'asc' : 'desc';
  else
  this.requestPaginate.order.order = "desc";
  this.requestPaginate.order.nome = orderBy;
  
  this.listarEmiter.emit(this.requestPaginate);
  }
}

changeQuantidade(value: number){
  this.requestPaginate.quantidadePorPagina = Number(value);
  this.listarEmiter.emit(this.requestPaginate);
}

paginate(pagina: number){
  this.requestPaginate.paginaAtual = pagina;  
  this.listarEmiter.emit(this.requestPaginate);
}

anterior(){
  if(this.requestPaginate.paginaAtual == 1)
    return;
  this.requestPaginate.paginaAtual = this.requestPaginate.paginaAtual- 1;  
  this.listarEmiter.emit(this.requestPaginate);
}

proximo(){
  if(this.requestPaginate.paginaAtual == this.resultPaginate.totalPaginas)
    return;
  this.requestPaginate.paginaAtual = this.requestPaginate.paginaAtual+ 1;  
  this.listarEmiter.emit(this.requestPaginate);
}

classeSorting(index: number){
  var titulo = this.order[index];
  if(titulo != undefined){
    let order = this.requestPaginate.order.order;
    let nome = this.requestPaginate.order.nome;
  
    if(titulo == nome){
      if(order == 'desc')
        return 'sorting_desc';
      else
      return 'sorting_asc';
    }
    return 'sorting';
  }
  return '';
}

classAnterior(){
  if(this.requestPaginate.paginaAtual == 1)
    return 'paginate_button page-item previous disabled';
  return 'paginate_button page-item previous pointer';
}

classProximo(){
  if(this.requestPaginate.paginaAtual == this.resultPaginate.totalPaginas)
    return 'paginate_button page-item next disabled';
  return 'paginate_button page-item next pointer';
}

}
