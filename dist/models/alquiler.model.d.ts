import { Entity } from '@loopback/repository';
export declare class Alquiler extends Entity {
    id?: string;
    contratoAlqFirmado: string;
    contratoCodeudorFirmado: string;
    cartaLaboral: string;
    fechaActualizacion: string;
    quienActualizo: string;
    solAlqId?: string;
    constructor(data?: Partial<Alquiler>);
}
export interface AlquilerRelations {
}
export declare type AlquilerWithRelations = Alquiler & AlquilerRelations;
