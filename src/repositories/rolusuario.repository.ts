import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InmobiliariaHcDataSource} from '../datasources';
import {Rolusuario, RolusuarioRelations} from '../models';

export class RolusuarioRepository extends DefaultCrudRepository<
  Rolusuario,
  typeof Rolusuario.prototype.id,
  RolusuarioRelations
> {
  constructor(
    @inject('datasources.InmobiliariaHC') dataSource: InmobiliariaHcDataSource,
  ) {
    super(Rolusuario, dataSource);
  }
}
