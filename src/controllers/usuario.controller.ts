import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';

import { authenticate } from '@loopback/authentication';
import { Usuario, Persona, Credenciales, Modificar } from '../models';
import { PersonaRepository, UsuarioRepository } from '../repositories';
import { Keys } from '../Configuracion/Keys';
import { AutenticacionService } from '../services';
import { service } from '@loopback/core';
const fetch = require("node-fetch");

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepo: UsuarioRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService,
    @repository(PersonaRepository)
    public personaRepo: PersonaRepository
  ) { }

  @post('/Registrese')
  @response(200, {
    description: 'Usuario model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Usuario) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {

    // Almacenar usuario y persona con la clave cifrada que se acaba de generar
    let clave = this.servicioAutenticacion.GenerarPassword();
    let claveCifrada = this.servicioAutenticacion.EncriptarPassword(clave);
    usuario.password = claveCifrada;
    let u = await this.usuarioRepo.create(usuario);

    // Notificación a través del correo las credenciales al nuevo usuario
    let destino = u.email;
    let asunto = "Credenciales para acceso a la APP-InmobiliariaHC";
    let contenido = `Hola, ${u.nombres} ${u.apellidos} su usuario para acceso es: ${u.email} y su contraseña es: ${clave}`;
    fetch(`${Keys.urlAutenticacion}/e-mail?destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
    //.then((data: any) => {console.log(data);});

    // Almacenar en Persona los datos si el perfil es diferente a "Visitante"
    if (u.perfil != "Visitante") {
      let p = await this.personaRepo.create(usuario);
    }
    return u;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepo.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepo.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, { partial: true }),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepo.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, { exclude: 'where' }) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepo.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, { partial: true }),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepo.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepo.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepo.deleteById(id);
  }

  /**
  * Métodos propios de la lógica del negocio
  */

  @post('/Login')
  @response(200, {
    description: "Ingreso de usuarios de la app y generación de token"
  })
  async identificar(
    @requestBody() credenciales: Credenciales
  ) {
    let user = await this.servicioAutenticacion.IdentificarUsuario(credenciales);
    if (user) {
      let token = this.servicioAutenticacion.GenerarToken(user);
      return {
        info: {
          id:user.id,
          nombres: user.nombres,
          apellidos:user.apellidos,
          email: user.email,
          celular: user.celular,
          perfil:user.perfil,
          rol: user.rols
        },
        tk: token
      }
    } else {
      throw new HttpErrors[401]("Usuario o contraseña inválido")
    }
  }

  @post('/recuperarPassword')
  @response(200, {
    description: "Recuperacion del password para el usuario"
  })
  async recuperarPass(
    @requestBody() email: string
  ): Promise<Boolean> {
    let user = await this.usuarioRepo.findOne({
      where: {
        email: email
      }
    });
    if (user) {
      let clave = this.servicioAutenticacion.GenerarPassword();
      console.log(clave);
      let claveCifrada = this.servicioAutenticacion.EncriptarPassword(clave);
      user.password = claveCifrada;
      await this.usuarioRepo.updateById(user.id, user);

      //Notificación a través del correo
      /* let destino = user.email;
      let asunto = "Recuperacion de contraseña de la app InmobiliariaHC";
      let contenido = `Hola, ${user.nombres} ${user.apellidos} se envía la nueva contraseña para atender su solicitud: ${clave}`;
      fetch(`${Keys.urlAutenticacion}/e-mail?destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      //.then((data: any) => {console.log(data);}); */
      //cambiar ${Keys.urlAutenticacion} por http://localhost:5000 para no iniciar variables de entorno con anaconda->spider
      return true;
    } else {
      return false;
    }
  }

  @post('/ModificarPassword')
  @response(200, {
    description: "Modificación de la contraseña por parte del usuario"
  })
  async modificarPass(
    @requestBody() datos: Modificar
  ): Promise<Boolean> {
    let cifrada = this.servicioAutenticacion.EncriptarPassword(datos.passold);
    let user = await this.usuarioRepo.findOne({
      where: {
        password: cifrada
      }
    });
    if (user) {
      if (datos.passnew == datos.passconfirm) {
        user.password = this.servicioAutenticacion.EncriptarPassword(datos.passnew);
        await this.usuarioRepo.updateById(user.id, user);
        // Notificación a través del correo
        /*let destino = user.email;
        let asunto = "Modificación de contraseña de la app InmobiliariaHC";
        let contenido = `Hola, ${user.nombres} ${user.apellidos} su nueva contraseña ${datos.passnew} ha sido aceptada`;
        fetch(`${Keys.urlAutenticacion}/e-mail?destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
        //.then((data: any) => {console.log(data);});*/
        return true;
      } else {
        // Notificación a través del correo
        /*let destino = user.email;
        let asunto = "Modificación de contraseña de la app InmobiliariaHC";
        let contenido = `Hola, ${user.nombres} ${user.apellidos} las contraseñas enviadas por usted no coinciden`;
        fetch(`${Keys.urlAutenticacion}/e-mail?destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
        //.then((data: any) => {console.log(data);});*/
        return false;
      }
    } else {
      return false;
    }
  }
}

