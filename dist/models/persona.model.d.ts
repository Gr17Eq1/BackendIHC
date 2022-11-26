import { Entity } from '@loopback/repository';
import { Inmueble } from './inmueble.model';
export declare class Persona extends Entity {
    id?: string;
    nombres: string;
    apellidos: string;
    celular: string;
    email: string;
    password: string;
    perfil: string;
    estadoUsuario: string;
    fechaActualizacion: string;
    quienActualizo: string;
    usuarioId?: string;
    inmuebles: Inmueble[];
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export declare type PersonaWithRelations = Persona & PersonaRelations;
