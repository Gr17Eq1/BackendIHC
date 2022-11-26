import { DefaultCrudRepository } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Rolusuario, RolusuarioRelations } from '../models';
export declare class RolusuarioRepository extends DefaultCrudRepository<Rolusuario, typeof Rolusuario.prototype.id, RolusuarioRelations> {
    constructor(dataSource: InmobiliariaHcDataSource);
}
