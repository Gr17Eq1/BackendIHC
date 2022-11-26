"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlquilerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AlquilerController = class AlquilerController {
    constructor(alquilerRepository) {
        this.alquilerRepository = alquilerRepository;
    }
    async create(alquiler) {
        return this.alquilerRepository.create(alquiler);
    }
    async count(where) {
        return this.alquilerRepository.count(where);
    }
    async find(filter) {
        return this.alquilerRepository.find(filter);
    }
    async updateAll(alquiler, where) {
        return this.alquilerRepository.updateAll(alquiler, where);
    }
    async findById(id, filter) {
        return this.alquilerRepository.findById(id, filter);
    }
    async updateById(id, alquiler) {
        await this.alquilerRepository.updateById(id, alquiler);
    }
    async replaceById(id, alquiler) {
        await this.alquilerRepository.replaceById(id, alquiler);
    }
    async deleteById(id) {
        await this.alquilerRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/alquilers'),
    (0, rest_1.response)(200, {
        description: 'Alquiler model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler, {
                    title: 'NewAlquiler',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alquilers/count'),
    (0, rest_1.response)(200, {
        description: 'Alquiler model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Alquiler)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alquilers'),
    (0, rest_1.response)(200, {
        description: 'Array of Alquiler model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Alquiler, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Alquiler)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/alquilers'),
    (0, rest_1.response)(200, {
        description: 'Alquiler PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Alquiler)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Alquiler, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alquilers/{id}'),
    (0, rest_1.response)(200, {
        description: 'Alquiler model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Alquiler, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/alquilers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alquiler PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alquiler, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Alquiler]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/alquilers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alquiler PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Alquiler]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/alquilers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alquiler DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlquilerController.prototype, "deleteById", null);
AlquilerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AlquilerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AlquilerRepository])
], AlquilerController);
exports.AlquilerController = AlquilerController;
//# sourceMappingURL=alquiler.controller.js.map