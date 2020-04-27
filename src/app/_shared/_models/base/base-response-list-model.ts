import { BaseErroModel } from './base-erro-model';
import { BaseModel } from './base-model';
import { BasePaginateDataModel } from './base-paginate-data-model';

export class BaseResponseListModel<TModel extends BaseModel>{
    data: BasePaginateDataModel<TModel>;
    sucesso: boolean
    erro: BaseErroModel;
}