import { Count, Filter, Where } from '@loopback/repository';
import { Solicitud, Venta } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudVentaController {
    protected solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    get(id: string, filter?: Filter<Venta>): Promise<Venta>;
    create(id: typeof Solicitud.prototype.id, venta: Omit<Venta, 'id'>): Promise<Venta>;
    patch(id: string, venta: Partial<Venta>, where?: Where<Venta>): Promise<Count>;
    delete(id: string, where?: Where<Venta>): Promise<Count>;
}
