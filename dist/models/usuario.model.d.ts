import { Entity } from '@loopback/repository';
import { Rol } from './rol.model';
import { Persona } from './persona.model';
export declare class Usuario extends Entity {
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
    rols: Rol[];
    persona: Persona;
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
