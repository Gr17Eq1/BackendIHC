"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estrategiaAsesor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = tslib_1.__importDefault(require("parse-bearer-token"));
const services_1 = require("../services");
var respuesta = false;
var nomest = "Asesor";
let estrategiaAsesor = class estrategiaAsesor {
    constructor(servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = "asesor";
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request);
        if (token) {
            let datos = this.servicioAutenticacion.ValidarToken(token);
            if (datos) {
                if (datos.data.rol) {
                    datos.data.rol.forEach(function (rol) {
                        //console.log("este es el rol " + rol.descripcion);
                        if (rol.descripcion == "Asesor") {
                            respuesta = true;
                        }
                    });
                    if (respuesta) {
                        var perfil = Object.assign({
                            nombre: datos.data.nombre
                        });
                        return perfil;
                    }
                    else {
                        throw new rest_1.HttpErrors[401](nomest + "No tiene permisos para acceder al recurso");
                    }
                }
                else {
                    throw new rest_1.HttpErrors[401](nomest + "Usuario tipo cliente sin autorización para este recurso");
                }
            }
            else {
                throw new rest_1.HttpErrors[401](nomest + "Tiene un token, pero no es válido");
            }
        }
        else {
            throw new rest_1.HttpErrors[401](nomest + "No hay un token en la solicitud");
        }
    }
};
estrategiaAsesor = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [services_1.AutenticacionService])
], estrategiaAsesor);
exports.estrategiaAsesor = estrategiaAsesor;
//# sourceMappingURL=estrategiaAsesor.js.map