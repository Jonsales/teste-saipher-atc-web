import { BaseFilter } from '../filters/base-filter';
import { OrderByRequestModel } from './order-by-request-model';

export class BaseRequestModel<TFilter extends BaseFilter>{
    paginaAtual: number;
    quantidadePorPagina: number;
    order: OrderByRequestModel;
    filtro: TFilter;

    constructor (filter: TFilter){
        this.paginaAtual = 1;
        this.quantidadePorPagina = 10;
        this.order = new OrderByRequestModel();
        this.filtro = filter == undefined ? null : filter;
    }
}