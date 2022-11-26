import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Usuario, Credenciales, Modificar } from '../models';
import { PersonaRepository, UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class UsuarioController {
    usuarioRepo: UsuarioRepository;
    servicioAutenticacion: AutenticacionService;
    personaRepo: PersonaRepository;
    constructor(usuarioRepo: UsuarioRepository, servicioAutenticacion: AutenticacionService, personaRepo: PersonaRepository);
    create(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    count(where?: Where<Usuario>): Promise<Count>;
    find(filter?: Filter<Usuario>): Promise<Usuario[]>;
    updateAll(usuario: Usuario, where?: Where<Usuario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Usuario>): Promise<Usuario>;
    updateById(id: string, usuario: Usuario): Promise<void>;
    replaceById(id: string, usuario: Usuario): Promise<void>;
    deleteById(id: string): Promise<void>;
    /**
    * Métodos propios de la lógica del negocio
    */
    identificar(credenciales: Credenciales): Promise<{
        info: {
            id: string | undefined;
            nombres: string;
            apellidos: string;
            email: string;
            celular: string;
            perfil: string;
            rol: import("../models").Rol[];
        };
        tk: any;
    }>;
    recuperarPass(email: string): Promise<Boolean>;
    modificarPass(datos: Modificar): Promise<Boolean>;
}
