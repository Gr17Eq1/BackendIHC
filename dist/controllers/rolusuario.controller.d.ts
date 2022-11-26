import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rolusuario } from '../models';
import { RolusuarioRepository } from '../repositories';
export declare class RolusuarioController {
    rolusuarioRepository: RolusuarioRepository;
    constructor(rolusuarioRepository: RolusuarioRepository);
    create(rolusuario: Omit<Rolusuario, 'id'>): Promise<Rolusuario>;
    count(where?: Where<Rolusuario>): Promise<Count>;
    find(filter?: Filter<Rolusuario>): Promise<Rolusuario[]>;
    updateAll(rolusuario: Rolusuario, where?: Where<Rolusuario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Rolusuario>): Promise<Rolusuario>;
    updateById(id: string, rolusuario: Rolusuario): Promise<void>;
    replaceById(id: string, rolusuario: Rolusuario): Promise<void>;
    deleteById(id: string): Promise<void>;
}
