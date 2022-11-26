import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Venta } from '../models';
import { VentaRepository } from '../repositories';
export declare class VentaController {
    ventaRepository: VentaRepository;
    constructor(ventaRepository: VentaRepository);
    create(venta: Omit<Venta, 'id'>): Promise<Venta>;
    count(where?: Where<Venta>): Promise<Count>;
    find(filter?: Filter<Venta>): Promise<Venta[]>;
    updateAll(venta: Venta, where?: Where<Venta>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Venta>): Promise<Venta>;
    updateById(id: string, venta: Venta): Promise<void>;
    replaceById(id: string, venta: Venta): Promise<void>;
    deleteById(id: string): Promise<void>;
}
