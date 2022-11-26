import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Persona, PersonaRelations, Inmueble } from '../models';
import { InmuebleRepository } from './inmueble.repository';
export declare class PersonaRepository extends DefaultCrudRepository<Persona, typeof Persona.prototype.id, PersonaRelations> {
    protected inmuebleRepositoryGetter: Getter<InmuebleRepository>;
    readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Persona.prototype.id>;
    constructor(dataSource: InmobiliariaHcDataSource, inmuebleRepositoryGetter: Getter<InmuebleRepository>);
}
