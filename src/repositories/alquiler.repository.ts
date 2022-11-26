import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InmobiliariaHcDataSource} from '../datasources';
import {Alquiler, AlquilerRelations} from '../models';

export class AlquilerRepository extends DefaultCrudRepository<
  Alquiler,
  typeof Alquiler.prototype.id,
  AlquilerRelations
> {
  constructor(
    @inject('datasources.InmobiliariaHC') dataSource: InmobiliariaHcDataSource,
  ) {
    super(Alquiler, dataSource);
  }
}
