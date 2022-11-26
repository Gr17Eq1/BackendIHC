"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SolicitudRepository = class SolicitudRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, ventaRepositoryGetter, alquilerRepositoryGetter) {
        super(models_1.Solicitud, dataSource);
        this.ventaRepositoryGetter = ventaRepositoryGetter;
        this.alquilerRepositoryGetter = alquilerRepositoryGetter;
        this.alquiler = this.createHasOneRepositoryFactoryFor('alquiler', alquilerRepositoryGetter);
        this.registerInclusionResolver('alquiler', this.alquiler.inclusionResolver);
        this.venta = this.createHasOneRepositoryFactoryFor('venta', ventaRepositoryGetter);
        this.registerInclusionResolver('venta', this.venta.inclusionResolver);
    }
};
SolicitudRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.InmobiliariaHC')),
    tslib_1.__param(1, repository_1.repository.getter('VentaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('AlquilerRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.InmobiliariaHcDataSource, Function, Function])
], SolicitudRepository);
exports.SolicitudRepository = SolicitudRepository;
//# sourceMappingURL=solicitud.repository.js.map