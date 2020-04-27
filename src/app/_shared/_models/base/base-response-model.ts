import { BaseErroModel } from './base-erro-model';
import { BaseModel } from './base-model';

export class BaseResponseModel<TModel extends BaseModel>{
    data: TModel;
    sucesso: boolean
    erro: BaseErroModel;
}