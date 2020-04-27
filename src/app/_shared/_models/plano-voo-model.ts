import { BaseModel } from './base/base-model';

export class PLanoVooModel extends BaseModel {
    numeroVoo: string;
    matriculaAeronave: string;
    dataHoraVoo: Date;
    tipoAeronave: string;
    origem: string;
    destino: string;
}