import { Entity } from '@loopback/repository';
export declare class Venta extends Entity {
    id?: string;
    contratoVenFirmado: string;
    fechaActualizacion: string;
    quienActualizo: string;
    solVenId?: string;
    constructor(data?: Partial<Venta>);
}
export interface VentaRelations {
}
export declare type VentaWithRelations = Venta & VentaRelations;
