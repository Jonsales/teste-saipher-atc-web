import { BaseModel } from '../../_models/base/base-model';
import { BaseServiceRequest } from '../../_services/base/base-request';
import { BaseFilter } from '../../_models/filters/base-filter';
import { BaseResponseModel } from '../../_models/base/base-response-model';
import { BaseMessages } from '../../_services/helper/base-messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

const not_found: number = 404;
const internal_server_error: number = 500;
const bad_request: number = 400;

export class BaseComponent<
    TModel extends BaseModel,
    TFilter extends BaseFilter,
    TService extends BaseServiceRequest<TModel, TFilter>> extends BaseMessages
    {

        constructor(
            protected toastr: ToastrService, 
            protected _router: Router,
            protected _route: ActivatedRoute,
            protected _service: TService) {
                super(toastr);
        }
        protected verificarErro(error: HttpErrorResponse) {
            var erro : BaseResponseModel<TModel> = <BaseResponseModel<TModel>> error.error;
            if(error.status == internal_server_error){
                this.exibirErro(erro.erro.titulo, erro.erro.mensagem);
            }
            else if(error.status == bad_request){
                this.emiteToastrWarning(erro.erro.titulo, erro.erro.mensagem);
            } 
            else if (error.status == not_found){
                this.exibirErro('Erro ao consultar API','Url não existe');
            }
            else{
                this.exibirErro('Erro desconhecido','Houve um erro desconhecido ao tentar conectar na API.');
            }
        }

        formGroupClass(ngForm: NgForm, prop: string, classe: string){
            if(ngForm != undefined &&
                ngForm.controls[prop] != undefined &&
              (ngForm.controls[prop].touched || ngForm.controls[prop].dirty) &&
              ngForm.controls[prop].errors){
                return `form-group ${classe} form-error`;      
            }
            return `form-group ${classe}`;
        }
}