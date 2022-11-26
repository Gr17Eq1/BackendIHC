"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rolusuario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Rolusuario = class Rolusuario extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Rolusuario.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Rolusuario.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Rolusuario.prototype, "rolId", void 0);
Rolusuario = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Rolusuario);
exports.Rolusuario = Rolusuario;
//# sourceMappingURL=rolusuario.model.js.map