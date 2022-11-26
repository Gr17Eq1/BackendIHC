"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudAlquilerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudAlquilerController = class SolicitudAlquilerController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async get(id, filter) {
        return this.solicitudRepository.alquiler(id).get(filter);
    }
    async create(id, alquiler) {
        return this.solicitudRepository.alquiler(id).create(alquiler);
    }
    async patch(id, alquiler, where) {
        return this.solicitudRepository.alquiler(id).patch(alquiler, where);
    }
    async delete(id, where) {
        return this.solicitudRepository.alquiler(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solicituds/{id}/alquiler', {
        responses: {
            '200': {
                description: 'Solicitud has one Alquiler',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler),
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
], SolicitudAlquilerController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solicituds/{id}/alquiler', {
        responses: {
            '200': {
                description: 'Solicitud model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler, {
                    title: 'NewAlquilerInSolicitud',
                    exclude: ['id'],
                    optional: ['solAlqId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudAlquilerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solicituds/{id}/alquiler', {
        responses: {
            '200': {
                description: 'Solicitud.Alquiler PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Alquiler))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudAlquilerController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solicituds/{id}/alquiler', {
        responses: {
            '200': {
                description: 'Solicitud.Alquiler DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Alquiler))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudAlquilerController.prototype, "delete", null);
SolicitudAlquilerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudAlquilerController);
exports.SolicitudAlquilerController = SolicitudAlquilerController;
//# sourceMappingURL=solicitud-alquiler.controller.js.map