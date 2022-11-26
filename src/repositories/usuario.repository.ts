import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {InmobiliariaHcDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Rol, Rolusuario, Persona} from '../models';
import {RolusuarioRepository} from './rolusuario.repository';
import {RolRepository} from './rol.repository';
import {PersonaRepository} from './persona.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {

  public readonly rols: HasManyThroughRepositoryFactory<Rol, typeof Rol.prototype.id,
          Rolusuario,
          typeof Usuario.prototype.id
        >;

  public readonly persona: HasOneRepositoryFactory<Persona, typeof Usuario.prototype.id>;

  constructor(
    @inject('datasources.InmobiliariaHC') dataSource: InmobiliariaHcDataSource, @repository.getter('RolusuarioRepository') protected rolusuarioRepositoryGetter: Getter<RolusuarioRepository>, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Usuario, dataSource);
    this.persona = this.createHasOneRepositoryFactoryFor('persona', personaRepositoryGetter);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
    this.rols = this.createHasManyThroughRepositoryFactoryFor('rols', rolRepositoryGetter, rolusuarioRepositoryGetter,);
    this.registerInclusionResolver('rols', this.rols.inclusionResolver);
  }
}
