import { Entity } from '@loopback/repository';
export declare class Rol extends Entity {
    id?: string;
    descripcion: string;
    fechaActualizacion: string;
    quienActualizo: string;
    constructor(data?: Partial<Rol>);
}
export interface RolRelations {
}
export declare type RolWithRelations = Rol & RolRelations;
