import { Count, Filter, Where } from '@loopback/repository';
import { Usuario, Persona } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioPersonaController {
    protected usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    get(id: string, filter?: Filter<Persona>): Promise<Persona>;
    create(id: typeof Usuario.prototype.id, persona: Omit<Persona, 'id'>): Promise<Persona>;
    patch(id: string, persona: Partial<Persona>, where?: Where<Persona>): Promise<Count>;
    delete(id: string, where?: Where<Persona>): Promise<Count>;
}
