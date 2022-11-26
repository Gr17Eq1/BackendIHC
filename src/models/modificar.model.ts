import {Model, model, property} from '@loopback/repository';

@model()
export class Modificar extends Model {
  @property({
    type: 'string',
    required: true,
  })
  passold: string;

  @property({
    type: 'string',
    required: true,
  })
  passnew: string;

  @property({
    type: 'string',
    required: true,
  })
  passconfirm: string;


  constructor(data?: Partial<Modificar>) {
    super(data);
  }
}

export interface ModificarRelations {
  // describe navigational properties here
}

export type ModificarWithRelations = Modificar & ModificarRelations;
