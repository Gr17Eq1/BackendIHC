import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Solicitud, SolicitudRelations, Venta, Alquiler } from '../models';
import { VentaRepository } from './venta.repository';
import { AlquilerRepository } from './alquiler.repository';
export declare class SolicitudRepository extends DefaultCrudRepository<Solicitud, typeof Solicitud.prototype.id, SolicitudRelations> {
    protected ventaRepositoryGetter: Getter<VentaRepository>;
    protected alquilerRepositoryGetter: Getter<AlquilerRepository>;
    readonly venta: HasOneRepositoryFactory<Venta, typeof Solicitud.prototype.id>;
    readonly alquiler: HasOneRepositoryFactory<Alquiler, typeof Solicitud.prototype.id>;
    constructor(dataSource: InmobiliariaHcDataSource, ventaRepositoryGetter: Getter<VentaRepository>, alquilerRepositoryGetter: Getter<AlquilerRepository>);
}
