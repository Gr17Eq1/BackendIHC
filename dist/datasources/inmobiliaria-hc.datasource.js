"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaHcDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'InmobiliariaHC',
    connector: 'mongodb',
    url: 'mongodb+srv://Frarturo:MinTic2022@cluster0.xp6tjij.mongodb.net/InmobiliariaHC?retryWrites=true&w=majority',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let InmobiliariaHcDataSource = class InmobiliariaHcDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
InmobiliariaHcDataSource.dataSourceName = 'InmobiliariaHC';
InmobiliariaHcDataSource.defaultConfig = config;
InmobiliariaHcDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.InmobiliariaHC', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], InmobiliariaHcDataSource);
exports.InmobiliariaHcDataSource = InmobiliariaHcDataSource;
//# sourceMappingURL=inmobiliaria-hc.datasource.js.map