"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const Keys_1 = require("../Configuracion/Keys");
const services_1 = require("../services");
const core_1 = require("@loopback/core");
const fetch = require("node-fetch");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepo, servicioAutenticacion, personaRepo) {
        this.usuarioRepo = usuarioRepo;
        this.servicioAutenticacion = servicioAutenticacion;
        this.personaRepo = personaRepo;
    }
    async create(usuario) {
        // Almacenar usuario y persona con la clave cifrada que se acaba de generar
        let clave = this.servicioAutenticacion.GenerarPassword();
        let claveCifrada = this.servicioAutenticacion.EncriptarPassword(clave);
        usuario.password = claveCifrada;
        let u = await this.usuarioRepo.create(usuario);
        // Notificación a través del correo las credenciales al nuevo usuario
        let destino = u.email;
        let asunto = "Credenciales para acceso a la APP-InmobiliariaHC";
        let contenido = `Hola, ${u.nombres} ${u.apellidos} su usuario para acceso es: ${u.email} y su contraseña es: ${clave}`;
        fetch(`${Keys_1.Keys.urlAutenticacion}/e-mail?destino=${destino}&asunto=${asunto}&contenido=${contenido}`);
        //.then((data: any) => {console.log(data);});
        // Almacenar en Persona los datos si el perfil es diferente a "Visitante"
        if (u.perfil != "Visitante") {
            let p = await this.personaRepo.create(usuario);
        }
        return u;
    }
    async count(where) {
        return this.usuarioRepo.count(where);
    }
    async find(filter) {
        return this.usuarioRepo.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepo.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepo.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepo.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepo.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepo.deleteById(id);
    }
    /**
    * Métodos propios de la lógica del negocio
    */
    async identificar(credenciales) {
        let user = await this.servicioAutenticacion.IdentificarUsuario(credenciales);
        if (user) {
            let token = this.servicioAutenticacion.GenerarToken(user);
            return {
                info: {
                    id: user.id,
                    nombres: user.nombres,
                    apellidos: user.apellidos,
                    email: user.email,
                    celular: user.celular,
                    perfil: user.perfil,
                    rol: user.rols
                },
                tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Usuario o contraseña inválido");
        }
    }
    async recuperarPass(email) {
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
        }
        else {
            return false;
        }
    }
    async modificarPass(datos) {
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
            }
            else {
                // Notificación a través del correo
                /*let destino = user.email;
                let asunto = "Modificación de contraseña de la app InmobiliariaHC";
                let contenido = `Hola, ${user.nombres} ${user.apellidos} las contraseñas enviadas por usted no coinciden`;
                fetch(`${Keys.urlAutenticacion}/e-mail?destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
                //.then((data: any) => {console.log(data);});*/
                return false;
            }
        }
        else {
            return false;
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/Registrese'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Usuario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.post)('/Login'),
    (0, rest_1.response)(200, {
        description: "Ingreso de usuarios de la app y generación de token"
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Credenciales]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "identificar", null);
tslib_1.__decorate([
    (0, rest_1.post)('/recuperarPassword'),
    (0, rest_1.response)(200, {
        description: "Recuperacion del password para el usuario"
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "recuperarPass", null);
tslib_1.__decorate([
    (0, rest_1.post)('/ModificarPassword'),
    (0, rest_1.response)(200, {
        description: "Modificación de la contraseña por parte del usuario"
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Modificar]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "modificarPass", null);
UsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__param(1, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository,
        services_1.AutenticacionService,
        repositories_1.PersonaRepository])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map