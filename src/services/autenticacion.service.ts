import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Credenciales, Usuario, Persona} from '../models';
import {UsuarioRepository, PersonaRepository} from '../repositories';
import {Keys} from '../Configuracion/Keys';
const generador = require("generate-password");
const cryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(PersonaRepository)
    public personaRepo: PersonaRepository,
    @repository(UsuarioRepository)
    public usuarioRepo: UsuarioRepository
  ) { }

  GenerarPassword() {
    let password = generador.generate({
      length: 7,
      numbers: true
    })
    return password;
  }

  EncriptarPassword(password: string) {
    let passCifrado = cryptoJS.MD5(password).toString();
    return passCifrado;
  }

  IdentificarUsuario(credenciales: Credenciales) {
    try {
      credenciales.password = this.EncriptarPassword(credenciales.password);
      let u = this.usuarioRepo.findOne({
        where: {
          email: credenciales.usuario,
          password: credenciales.password
        }, include: ['rols']
      });
      return u;
    } catch {
      return false;
    }
  }

  GenerarToken(usuario: Usuario) {
    let token = JWT.sign({
      // fecha de expiración: no la usamos para que el token sea vitalicio
      data: {
        correo: usuario.email,
        nombre: usuario.nombres + " " + usuario.apellidos,
        rol: usuario.rols
      }
    }, Keys.LlaveJWT);
    return token;
  }

  ValidarToken(token: string) {
    try {
      let datos = JWT.verify(token, Keys.LlaveJWT);
      return datos;
    } catch {
      return false;
    }
  }
}
