import { Count, Filter, Where } from '@loopback/repository';
import { Persona, Inmueble } from '../models';
import { PersonaRepository } from '../repositories';
export declare class PersonaInmuebleController {
    protected personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    find(id: string, filter?: Filter<Inmueble>): Promise<Inmueble[]>;
    create(id: typeof Persona.prototype.id, inmueble: Omit<Inmueble, 'id'>): Promise<Inmueble>;
    patch(id: string, inmueble: Partial<Inmueble>, where?: Where<Inmueble>): Promise<Count>;
    delete(id: string, where?: Where<Inmueble>): Promise<Count>;
}
