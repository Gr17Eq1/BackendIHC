"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaController = class VentaController {
    constructor(ventaRepository) {
        this.ventaRepository = ventaRepository;
    }
    async create(venta) {
        return this.ventaRepository.create(venta);
    }
    async count(where) {
        return this.ventaRepository.count(where);
    }
    async find(filter) {
        return this.ventaRepository.find(filter);
    }
    async updateAll(venta, where) {
        return this.ventaRepository.updateAll(venta, where);
    }
    async findById(id, filter) {
        return this.ventaRepository.findById(id, filter);
    }
    async updateById(id, venta) {
        await this.ventaRepository.updateById(id, venta);
    }
    async replaceById(id, venta) {
        await this.ventaRepository.replaceById(id, venta);
    }
    async deleteById(id) {
        await this.ventaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/ventas'),
    (0, rest_1.response)(200, {
        description: 'Venta model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Venta) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venta, {
                    title: 'NewVenta',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ventas/count'),
    (0, rest_1.response)(200, {
        description: 'Venta model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Venta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ventas'),
    (0, rest_1.response)(200, {
        description: 'Array of Venta model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Venta, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Venta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ventas'),
    (0, rest_1.response)(200, {
        description: 'Venta PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venta, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Venta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Venta, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ventas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Venta model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venta, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Venta, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ventas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Venta PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venta, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Venta]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ventas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Venta PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Venta]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ventas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Venta DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaController.prototype, "deleteById", null);
VentaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VentaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VentaRepository])
], VentaController);
exports.VentaController = VentaController;
//# sourceMappingURL=venta.controller.js.map