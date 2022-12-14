"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudVentaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudVentaController = class SolicitudVentaController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async get(id, filter) {
        return this.solicitudRepository.venta(id).get(filter);
    }
    async create(id, venta) {
        return this.solicitudRepository.venta(id).create(venta);
    }
    async patch(id, venta, where) {
        return this.solicitudRepository.venta(id).patch(venta, where);
    }
    async delete(id, where) {
        return this.solicitudRepository.venta(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solicituds/{id}/venta', {
        responses: {
            '200': {
                description: 'Solicitud has one Venta',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Venta),
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
], SolicitudVentaController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solicituds/{id}/venta', {
        responses: {
            '200': {
                description: 'Solicitud model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Venta) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venta, {
                    title: 'NewVentaInSolicitud',
                    exclude: ['id'],
                    optional: ['solVenId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudVentaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solicituds/{id}/venta', {
        responses: {
            '200': {
                description: 'Solicitud.Venta PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venta, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Venta))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudVentaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solicituds/{id}/venta', {
        responses: {
            '200': {
                description: 'Solicitud.Venta DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Venta))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudVentaController.prototype, "delete", null);
SolicitudVentaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudVentaController);
exports.SolicitudVentaController = SolicitudVentaController;
//# sourceMappingURL=solicitud-venta.controller.js.map