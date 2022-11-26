import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Inmueble, InmuebleRelations, Solicitud } from '../models';
import { SolicitudRepository } from './solicitud.repository';
export declare class InmuebleRepository extends DefaultCrudRepository<Inmueble, typeof Inmueble.prototype.id, InmuebleRelations> {
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Inmueble.prototype.id>;
    constructor(dataSource: InmobiliariaHcDataSource, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
