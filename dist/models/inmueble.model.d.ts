import { Entity } from '@loopback/repository';
import { Solicitud } from './solicitud.model';
export declare class Inmueble extends Entity {
    id?: string;
    codigoInm: number;
    ubicacionDepartamentoInm: string;
    ubicacionCiudadInm: string;
    direccionInm: string;
    imagenInm: string;
    linkYoutubeInm: string;
    tipoInm: string;
    tipoOferta: string;
    valor: number;
    participacion?: number;
    estadoInm: string;
    fechaActualizacion: string;
    quienActualizo: string;
    personaId?: string;
    solicituds: Solicitud[];
    constructor(data?: Partial<Inmueble>);
}
export interface InmuebleRelations {
}
export declare type InmuebleWithRelations = Inmueble & InmuebleRelations;
