import { BaseModel } from './base-model';

export class BasePaginateDataModel<TModel extends BaseModel>{
    paginaAtual:number;
    proximo: boolean;
    anterior: boolean;
    totalPaginas:number;
    quantidadeItens:number;
    quantidadeItensPorPagina:number;
    itens: TModel[];

    constructor(){
        this.paginaAtual = 1;
        this.proximo = true;
        this.anterior = true;
        this.totalPaginas = 1;
        this.quantidadeItens = 1;
        this.quantidadeItensPorPagina = 1;
        this.itens = null;
    }
}