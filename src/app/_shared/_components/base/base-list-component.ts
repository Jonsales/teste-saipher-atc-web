import { BaseModel } from '../../_models/base/base-model';
import { BaseFilter } from '../../_models/filters/base-filter';
import { BaseServiceRequest } from '../../_services/base/base-request';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from './base-component';
import { BaseRequestModel } from '../../_models/base/base-request-model';
import { BasePaginateDataModel } from '../../_models/base/base-paginate-data-model';
import { Router } from '@angular/router';
declare var $: any;

export abstract class BaseListComponent<
    TModel extends BaseModel,
    TFilter extends BaseFilter,
    TService extends BaseServiceRequest<TModel, TFilter>> extends BaseComponent<TModel, TFilter, TService>
    {

        constructor(
            protected toastr: ToastrService,
            protected _service: TService,
            protected _router: Router
            ) {
                super(toastr, _router);
        }

        abstract titulos:string[];
        abstract order:string[];
        
        filter: TFilter;
        results: TModel[];
        responsePaginate: BasePaginateDataModel<TModel>;
        requestPaginate = new BaseRequestModel<TFilter>(this.filter);

        buscarLista(paginate: BaseRequestModel<TFilter>): void{

            this._service.paginate(paginate)
            .subscribe(
                success => {
                    if(success != null){
                        this.responsePaginate = success.data;
                        this.results = success.data.itens;
                    }
                    else
                        this.emiteToastrInfo('Nada encontrado','Não foi encontrado nenhum item para exibir.');
                },
                error => {
                    this.verificarErro(error);
                }
            );
        };

        abstract pesquisar(pesquisa: string);

        excluirItem(item: TModel, titulo: string) :void{
            titulo = `Deseja realmente exluir a ${titulo}`;
            this.exibeMensagemExclusao(titulo)
            .subscribe(x=>{
                if(x)
                    this.exluir(item);
            });
        }

        exluir(item: TModel): void{
            this._service.delete(item.id)
            .subscribe(
                success => {
                    this.buscarLista(this.requestPaginate);
                },
                error => {
                    this.verificarErro(error);
                }
            );
        }
    }