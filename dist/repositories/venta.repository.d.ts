import { DefaultCrudRepository } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Venta, VentaRelations } from '../models';
export declare class VentaRepository extends DefaultCrudRepository<Venta, typeof Venta.prototype.id, VentaRelations> {
    constructor(dataSource: InmobiliariaHcDataSource);
}
