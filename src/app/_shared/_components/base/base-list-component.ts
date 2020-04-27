import { BaseModel } from '../../_models/base/base-model';
import { BaseFilter } from '../../_models/filters/base-filter';
import { BaseServiceRequest } from '../../_services/base/base-request';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from './base-component';
import { BaseRequestModel } from '../../_models/base/base-request-model';
import { BasePaginateDataModel } from '../../_models/base/base-paginate-data-model';
declare var $: any;

export class BaseListComponent<
    TModel extends BaseModel,
    TFilter extends BaseFilter,
    TService extends BaseServiceRequest<TModel, TFilter>> extends BaseComponent<TModel, TFilter, TService>
    {

        constructor(
            protected toastr: ToastrService,
            protected _service: TService
            ) {
                super(toastr);
        }

        filter: TFilter;
        results: TModel[];
        responsePaginate: BasePaginateDataModel<TModel>;

        buscarLista(): void{
            let requestPaginate = new BaseRequestModel<TFilter>(this.filter);

            this._service.paginate(requestPaginate)
            .subscribe(
                success => {
                    if(success != null){
                        this.responsePaginate = success.data;
                        this.results = success.data.itens;
                        // $('#dataTable').DataTable();
                    }
                    else
                        this.emiteToastrInfo('Nada encontrado','Não foi encontrado nenhum item para exibir.');
                },
                error => {
                    this.verificarErro(error);
                }
            );
        };
    }