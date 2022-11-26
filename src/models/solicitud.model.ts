import {Entity, model, property, hasOne} from '@loopback/repository';
import {Venta} from './venta.model';
import {Alquiler} from './alquiler.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaSol: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoSol: string;

  @property({
    type: 'string',
    required: true,
  })
  comentariosSol: string;

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
  inmuebleId?: string;

  @hasOne(() => Venta, {keyTo: 'solVenId'})
  venta: Venta;

  @hasOne(() => Alquiler, {keyTo: 'solAlqId'})
  alquiler: Alquiler;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
