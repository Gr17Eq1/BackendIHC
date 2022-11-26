import { Count, Filter, Where } from '@loopback/repository';
import { Solicitud, Alquiler } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudAlquilerController {
    protected solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    get(id: string, filter?: Filter<Alquiler>): Promise<Alquiler>;
    create(id: typeof Solicitud.prototype.id, alquiler: Omit<Alquiler, 'id'>): Promise<Alquiler>;
    patch(id: string, alquiler: Partial<Alquiler>, where?: Where<Alquiler>): Promise<Count>;
    delete(id: string, where?: Where<Alquiler>): Promise<Count>;
}
