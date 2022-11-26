import { Entity } from '@loopback/repository';
import { Venta } from './venta.model';
import { Alquiler } from './alquiler.model';
export declare class Solicitud extends Entity {
    id?: string;
    fechaSol: string;
    estadoSol: string;
    comentariosSol: string;
    fechaActualizacion: string;
    quienActualizo: string;
    inmuebleId?: string;
    venta: Venta;
    alquiler: Alquiler;
    constructor(data?: Partial<Solicitud>);
}
export interface SolicitudRelations {
}
export declare type SolicitudWithRelations = Solicitud & SolicitudRelations;
