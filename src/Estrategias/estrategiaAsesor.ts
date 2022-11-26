import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {Request, HttpErrors} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {AutenticacionService} from '../services';
var respuesta: boolean = false
var nomest: string = "Asesor";

export class estrategiaAsesor implements AuthenticationStrategy {
  name: string = "asesor";

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
            //console.log("este es el rol " + rol.descripcion);
            if (rol.descripcion == "Asesor") {
              respuesta = true;
            }
          });
          if (respuesta) {
            var perfil: UserProfile = Object.assign({
              nombre: datos.data.nombre
            });
            return perfil;
          } else {
            throw new HttpErrors[401](nomest + "No tiene permisos para acceder al recurso")
          }
        } else {
          throw new HttpErrors[401](nomest + "Usuario tipo cliente sin autorización para este recurso")
        }
      } else {
        throw new HttpErrors[401](nomest + "Tiene un token, pero no es válido")
      }
    } else {
      throw new HttpErrors[401](nomest + "No hay un token en la solicitud")
    }

  }
}
