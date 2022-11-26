import { DefaultCrudRepository } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Rol, RolRelations } from '../models';
export declare class RolRepository extends DefaultCrudRepository<Rol, typeof Rol.prototype.id, RolRelations> {
    constructor(dataSource: InmobiliariaHcDataSource);
}
