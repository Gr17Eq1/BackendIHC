import { Count, Filter, Where } from '@loopback/repository';
import { Usuario, Rol } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioRolController {
    protected usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    find(id: string, filter?: Filter<Rol>): Promise<Rol[]>;
    create(id: typeof Usuario.prototype.id, rol: Omit<Rol, 'id'>): Promise<Rol>;
    patch(id: string, rol: Partial<Rol>, where?: Where<Rol>): Promise<Count>;
    delete(id: string, where?: Where<Rol>): Promise<Count>;
}
