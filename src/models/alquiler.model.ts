import {Entity, model, property} from '@loopback/repository';

@model()
export class Alquiler extends Entity {
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
  contratoAlqFirmado: string;

  @property({
    type: 'string',
    required: true,
  })
  contratoCodeudorFirmado: string;

  @property({
    type: 'string',
    required: true,
  })
  cartaLaboral: string;

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

  @property({
    type: 'string',
  })
  solAlqId?: string;

  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
