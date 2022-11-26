"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modificar = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Modificar = class Modificar extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Modificar.prototype, "passold", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Modificar.prototype, "passnew", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Modificar.prototype, "passconfirm", void 0);
Modificar = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Modificar);
exports.Modificar = Modificar;
//# sourceMappingURL=modificar.model.js.map