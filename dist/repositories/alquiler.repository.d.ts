import { DefaultCrudRepository } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Alquiler, AlquilerRelations } from '../models';
export declare class AlquilerRepository extends DefaultCrudRepository<Alquiler, typeof Alquiler.prototype.id, AlquilerRelations> {
    constructor(dataSource: InmobiliariaHcDataSource);
}
