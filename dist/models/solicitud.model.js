"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitud = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const venta_model_1 = require("./venta.model");
const alquiler_model_1 = require("./alquiler.model");
let Solicitud = class Solicitud extends repository_1.Entity {
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
], Solicitud.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "fechaSol", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "estadoSol", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "comentariosSol", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "fechaActualizacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "quienActualizo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "inmuebleId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => venta_model_1.Venta, { keyTo: 'solVenId' }),
    tslib_1.__metadata("design:type", venta_model_1.Venta)
], Solicitud.prototype, "venta", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => alquiler_model_1.Alquiler, { keyTo: 'solAlqId' }),
    tslib_1.__metadata("design:type", alquiler_model_1.Alquiler)
], Solicitud.prototype, "alquiler", void 0);
Solicitud = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Solicitud);
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitud.model.js.map