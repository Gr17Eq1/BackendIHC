"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaInmuebleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PersonaInmuebleController = class PersonaInmuebleController {
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
    }
    async find(id, filter) {
        return this.personaRepository.inmuebles(id).find(filter);
    }
    async create(id, inmueble) {
        return this.personaRepository.inmuebles(id).create(inmueble);
    }
    async patch(id, inmueble, where) {
        return this.personaRepository.inmuebles(id).patch(inmueble, where);
    }
    async delete(id, where) {
        return this.personaRepository.inmuebles(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/personas/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Array of Persona has many Inmueble',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaInmuebleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/personas/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Persona model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, {
                    title: 'NewInmuebleInPersona',
                    exclude: ['id'],
                    optional: ['personaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaInmuebleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/personas/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Persona.Inmueble PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaInmuebleController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/personas/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Persona.Inmueble DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaInmuebleController.prototype, "delete", null);
PersonaInmuebleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository])
], PersonaInmuebleController);
exports.PersonaInmuebleController = PersonaInmuebleController;
//# sourceMappingURL=persona-inmueble.controller.js.map