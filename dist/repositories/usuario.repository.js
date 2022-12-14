"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsuarioRepository = class UsuarioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, rolusuarioRepositoryGetter, rolRepositoryGetter, personaRepositoryGetter) {
        super(models_1.Usuario, dataSource);
        this.rolusuarioRepositoryGetter = rolusuarioRepositoryGetter;
        this.rolRepositoryGetter = rolRepositoryGetter;
        this.personaRepositoryGetter = personaRepositoryGetter;
        this.persona = this.createHasOneRepositoryFactoryFor('persona', personaRepositoryGetter);
        this.registerInclusionResolver('persona', this.persona.inclusionResolver);
        this.rols = this.createHasManyThroughRepositoryFactoryFor('rols', rolRepositoryGetter, rolusuarioRepositoryGetter);
        this.registerInclusionResolver('rols', this.rols.inclusionResolver);
    }
};
UsuarioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.InmobiliariaHC')),
    tslib_1.__param(1, repository_1.repository.getter('RolusuarioRepository')),
    tslib_1.__param(2, repository_1.repository.getter('RolRepository')),
    tslib_1.__param(3, repository_1.repository.getter('PersonaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.InmobiliariaHcDataSource, Function, Function, Function])
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map