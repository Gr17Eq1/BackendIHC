import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Rol} from './rol.model';
import {Rolusuario} from './rolusuario.model';
import {Persona} from './persona.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  perfil: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoUsuario: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaActualizacion: string;

  @property({
    type: 'string',
    required: true,
  })
  quienActualizo: string;

  @hasMany(() => Rol, {through: {model: () => Rolusuario}})
  rols: Rol[];

  @hasOne(() => Persona)
  persona: Persona;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
