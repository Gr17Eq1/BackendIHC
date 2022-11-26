"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const Keys_1 = require("../Configuracion/Keys");
const generador = require("generate-password");
const cryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
let AutenticacionService = class AutenticacionService {
    constructor(personaRepo, usuarioRepo) {
        this.personaRepo = personaRepo;
        this.usuarioRepo = usuarioRepo;
    }
    GenerarPassword() {
        let password = generador.generate({
            length: 7,
            numbers: true
        });
        return password;
    }
    EncriptarPassword(password) {
        let passCifrado = cryptoJS.MD5(password).toString();
        return passCifrado;
    }
    IdentificarUsuario(credenciales) {
        try {
            credenciales.password = this.EncriptarPassword(credenciales.password);
            let u = this.usuarioRepo.findOne({
                where: {
                    email: credenciales.usuario,
                    password: credenciales.password
                }, include: ['rols']
            });
            return u;
        }
        catch (_a) {
            return false;
        }
    }
    GenerarToken(usuario) {
        let token = JWT.sign({
            // fecha de expiración: no la usamos para que el token sea vitalicio
            data: {
                correo: usuario.email,
                nombre: usuario.nombres + " " + usuario.apellidos,
                rol: usuario.rols
            }
        }, Keys_1.Keys.LlaveJWT);
        return token;
    }
    ValidarToken(token) {
        try {
            let datos = JWT.verify(token, Keys_1.Keys.LlaveJWT);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository,
        repositories_1.UsuarioRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map