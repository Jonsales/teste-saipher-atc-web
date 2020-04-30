import { Injectable } from '@angular/core';
import { PlanoVooModel } from '../../_models/plano-voo-model';
import { PlanoVooFilter } from '../../_models/filters/plano-voo-filter';
import { BaseServiceRequest } from '../base/base-request';

@Injectable()
export class PlanoVooService extends BaseServiceRequest<PlanoVooModel, PlanoVooFilter> {
    url: string = 'planovoo';
    
}