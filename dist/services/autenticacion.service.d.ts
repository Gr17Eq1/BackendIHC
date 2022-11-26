import { Credenciales, Usuario } from '../models';
import { UsuarioRepository, PersonaRepository } from '../repositories';
export declare class AutenticacionService {
    personaRepo: PersonaRepository;
    usuarioRepo: UsuarioRepository;
    constructor(personaRepo: PersonaRepository, usuarioRepo: UsuarioRepository);
    GenerarPassword(): any;
    EncriptarPassword(password: string): any;
    IdentificarUsuario(credenciales: Credenciales): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
    GenerarToken(usuario: Usuario): any;
    ValidarToken(token: string): any;
}
