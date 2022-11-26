"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolusuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RolusuarioController = class RolusuarioController {
    constructor(rolusuarioRepository) {
        this.rolusuarioRepository = rolusuarioRepository;
    }
    async create(rolusuario) {
        return this.rolusuarioRepository.create(rolusuario);
    }
    async count(where) {
        return this.rolusuarioRepository.count(where);
    }
    async find(filter) {
        return this.rolusuarioRepository.find(filter);
    }
    async updateAll(rolusuario, where) {
        return this.rolusuarioRepository.updateAll(rolusuario, where);
    }
    async findById(id, filter) {
        return this.rolusuarioRepository.findById(id, filter);
    }
    async updateById(id, rolusuario) {
        await this.rolusuarioRepository.updateById(id, rolusuario);
    }
    async replaceById(id, rolusuario) {
        await this.rolusuarioRepository.replaceById(id, rolusuario);
    }
    async deleteById(id) {
        await this.rolusuarioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/rolusuarios'),
    (0, rest_1.response)(200, {
        description: 'Rolusuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuario, {
                    title: 'NewRolusuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rolusuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Rolusuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Rolusuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rolusuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Rolusuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rolusuario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Rolusuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rolusuarios'),
    (0, rest_1.response)(200, {
        description: 'Rolusuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Rolusuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Rolusuario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rolusuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Rolusuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Rolusuario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rolusuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rolusuario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rolusuario]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/rolusuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rolusuario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rolusuario]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/rolusuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rolusuario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RolusuarioController.prototype, "deleteById", null);
RolusuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RolusuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RolusuarioRepository])
], RolusuarioController);
exports.RolusuarioController = RolusuarioController;
//# sourceMappingURL=rolusuario.controller.js.map