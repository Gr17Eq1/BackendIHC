import { Entity } from '@loopback/repository';
export declare class Rolusuario extends Entity {
    id?: string;
    usuarioId?: string;
    rolId?: string;
    constructor(data?: Partial<Rolusuario>);
}
export interface RolusuarioRelations {
}
export declare type RolusuarioWithRelations = Rolusuario & RolusuarioRelations;
