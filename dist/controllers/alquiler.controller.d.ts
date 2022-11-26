import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Alquiler } from '../models';
import { AlquilerRepository } from '../repositories';
export declare class AlquilerController {
    alquilerRepository: AlquilerRepository;
    constructor(alquilerRepository: AlquilerRepository);
    create(alquiler: Omit<Alquiler, 'id'>): Promise<Alquiler>;
    count(where?: Where<Alquiler>): Promise<Count>;
    find(filter?: Filter<Alquiler>): Promise<Alquiler[]>;
    updateAll(alquiler: Alquiler, where?: Where<Alquiler>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Alquiler>): Promise<Alquiler>;
    updateById(id: string, alquiler: Alquiler): Promise<void>;
    replaceById(id: string, alquiler: Alquiler): Promise<void>;
    deleteById(id: string): Promise<void>;
}
