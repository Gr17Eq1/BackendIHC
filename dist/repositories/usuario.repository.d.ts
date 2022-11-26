import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { InmobiliariaHcDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Rol, Rolusuario, Persona } from '../models';
import { RolusuarioRepository } from './rolusuario.repository';
import { RolRepository } from './rol.repository';
import { PersonaRepository } from './persona.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id, UsuarioRelations> {
    protected rolusuarioRepositoryGetter: Getter<RolusuarioRepository>;
    protected rolRepositoryGetter: Getter<RolRepository>;
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    readonly rols: HasManyThroughRepositoryFactory<Rol, typeof Rol.prototype.id, Rolusuario, typeof Usuario.prototype.id>;
    readonly persona: HasOneRepositoryFactory<Persona, typeof Usuario.prototype.id>;
    constructor(dataSource: InmobiliariaHcDataSource, rolusuarioRepositoryGetter: Getter<RolusuarioRepository>, rolRepositoryGetter: Getter<RolRepository>, personaRepositoryGetter: Getter<PersonaRepository>);
}
