import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {Request, HttpErrors} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {AutenticacionService} from '../services';
var respuesta: boolean = false
var nomest: string = "Admin";

export class estrategiaAdmin implements AuthenticationStrategy {
  name: string = "admin";

  constructor(
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ) { }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request);
    if (token) {
      let datos = this.servicioAutenticacion.ValidarToken(token);
      if (datos) {
        if (datos.data.rol) {
          datos.data.rol.forEach(function (rol: any) {
            // console.log("este es el rol " + rol.descripcion);
            if (rol.descripcion == "Administrador") {
              respuesta = true;
            }
          });
          if (respuesta) {
            var perfil: UserProfile = Object.assign({
              nombre: datos.data.nombre
            });
            return perfil;
          } else {
            throw new HttpErrors[401]("[" + nomest + "1] " + "No tiene permisos para acceder al recurso")
          }
        } else {
          throw new HttpErrors[401]("[" + nomest + "2] " + "Usuario tipo cliente sin autorización para este recurso")
        }
      } else {
        throw new HttpErrors[401]("[" + nomest + "3] " + "Tiene un token, pero no es válido")
      }
    } else {
      throw new HttpErrors[401]("[" + nomest + "4] " + "No hay un token en la solicitud")
    }
  }
}
