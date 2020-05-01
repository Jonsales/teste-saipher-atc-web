import { Injectable } from '@angular/core';
import { IBaseRequest } from '../interfaces/ibase-request';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Config } from '../../_models/base/config';
import { Observable, throwError } from 'rxjs';
import { BaseRequestModel } from '../../_models/base/base-request-model';
import { BaseResponseModel } from '../../_models/base/base-response-model';
import { catchError } from 'rxjs/operators';
import { BaseResponseListModel } from 'src/app/_shared/_models/base/base-response-list-model';
import { BaseModel } from 'src/app/_shared/_models/base/base-model';
import { BaseFilter } from 'src/app/_shared/_models/filters/base-filter';

const unauthorized: number = 401;
const not_found: number = 404;
const internal_server_error: number = 500;
const success: number = 200;
const no_content: number = 204;
const bad_request: number = 400;

@Injectable()
export abstract class BaseServiceRequest<TModel extends BaseModel, TFilter extends BaseFilter>
implements IBaseRequest<TModel, TFilter>{    

    abstract url: string;

    constructor(protected _http: HttpClient,
        protected _config: Config) {
    }

    paginate(requestData: BaseRequestModel<TFilter>): Observable<BaseResponseListModel<TModel>> {
        return this._http.post<BaseResponseListModel<TModel>>(
            `${this._config.url}${this.url}/paginate`, requestData
        ).pipe(catchError(this.verificarErro));
    }
    get(id: number): Observable<BaseResponseModel<TModel>> {
        return this._http.get<BaseResponseModel<TModel>>(
            this._config.url + this.url + `/${id}`
        ).pipe(catchError(this.verificarErro));
    }
    update(model: TModel): Observable<BaseResponseModel<TModel>> {
        return this._http.put<BaseResponseModel<TModel>>(
            this._config.url + this.url , model
        ).pipe(catchError(this.verificarErro));
    }
    create(model: TModel): Observable<BaseResponseModel<TModel>> {
        return this._http.post<BaseResponseModel<TModel>>(
            this._config.url + this.url, model
        ).pipe(catchError(this.verificarErro));
    }
    delete(deleteItem: number): Observable<BaseResponseModel<TModel>> {
        return this._http.delete<BaseResponseModel<TModel>>( 
        this._config.url + this.url + `/${deleteItem}`
        )
        .pipe(catchError(this.verificarErro));
    }

    protected verificarErro(error: HttpErrorResponse) {
        return throwError(error);
    }

    protected onSuccess(resp: any) {
        console.log(resp);
        return resp;
    }
}