import { BaseFilter } from '../filters/base-filter';

export class BaseRequestModel<TFilter extends BaseFilter>{
    paginaAtual: number;
    quantidadePorPagina: number;
    filtro: TFilter;

    constructor (filter: TFilter){
        this.paginaAtual = 1;
        this.quantidadePorPagina = 10;
        this.filtro = filter == undefined ? null : filter;
    }
}