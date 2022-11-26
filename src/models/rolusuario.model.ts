import {Entity, model, property} from '@loopback/repository';

@model()
export class Rolusuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  @property({
    type: 'string',
  })
  rolId?: string;

  constructor(data?: Partial<Rolusuario>) {
    super(data);
  }
}

export interface RolusuarioRelations {
  // describe navigational properties here
}

export type RolusuarioWithRelations = Rolusuario & RolusuarioRelations;
