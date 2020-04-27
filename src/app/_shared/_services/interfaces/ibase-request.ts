import { Observable } from 'rxjs';
import { BaseResponseModel } from '../../_models/base/base-response-model';
import { BaseRequestModel } from '../../_models/base/base-request-model';
import { BaseModel } from '../../_models/base/base-model';
import { BaseFilter } from '../../_models/filters/base-filter';
import { BaseResponseListModel } from '../../_models/base/base-response-list-model';

export interface IBaseRequest<TModel extends BaseModel, TFilter extends BaseFilter> {

    paginate(requestData: BaseRequestModel<TFilter>): Observable<BaseResponseListModel<TModel>>;
  
    get(id: number): Observable<BaseResponseModel<TModel>>;
  
    update(model: TModel): Observable<BaseResponseModel<TModel>>;
  
    create(model: TModel): Observable<BaseResponseModel<TModel>>;
  
    delete(deleteItem: number): Observable<BaseResponseModel<TModel>>;
  }