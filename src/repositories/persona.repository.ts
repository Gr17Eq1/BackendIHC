import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {InmobiliariaHcDataSource} from '../datasources';
import {Persona, PersonaRelations, Inmueble} from '../models';
import {InmuebleRepository} from './inmueble.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.InmobiliariaHC') dataSource: InmobiliariaHcDataSource, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(Persona, dataSource);
    this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
  }
}
