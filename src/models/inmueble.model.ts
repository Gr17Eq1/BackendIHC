import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  codigoInm: number;

  @property({
    type: 'string',
    required: true,
  })
  ubicacionDepartamentoInm: string;

  @property({
    type: 'string',
    required: true,
  })
  ubicacionCiudadInm: string;

  @property({
    type: 'string',
    required: true,
  })
  direccionInm: string;

  @property({
    type: 'string',
    required: true,
  })
  imagenInm: string;

  @property({
    type: 'string',
    required: true,
  })
  linkYoutubeInm: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoInm: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoOferta: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'number',
    required: false,
  })
  participacion?: number;

  @property({
    type: 'string',
    required: true,
  })
  estadoInm: string;

  @property({
    type: 'string',
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
  personaId?: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
