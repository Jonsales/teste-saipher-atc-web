import { BaseModel } from './base/base-model';
import { Time } from '@angular/common';

export class PlanoVooModel extends BaseModel {
    numeroVoo: string;
    matriculaAeronave: string;
    dataHoraVoo: Date;
    horaVoo: Date;
    tipoAeronave: string;
    origem: string;
    destino: string;
}