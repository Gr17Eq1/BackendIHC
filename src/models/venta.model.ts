import {Entity, model, property} from '@loopback/repository';

@model()
export class Venta extends Entity {
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
  contratoVenFirmado: string;

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
  solVenId?: string;

  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;
