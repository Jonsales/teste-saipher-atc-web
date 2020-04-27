import { Injectable } from '@angular/core';
import { PLanoVooModel } from '../../_models/plano-voo-model';
import { PlanoVooFilter } from '../../_models/filters/plano-voo-filter';
import { BaseServiceRequest } from '../base/base-request';

@Injectable()
export class PlanoVooService extends BaseServiceRequest<PLanoVooModel, PlanoVooFilter> {
    url: string = 'planovoo';
    
}