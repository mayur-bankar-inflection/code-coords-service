"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const roles_mapper_1 = require("../mappers/roles.mapper");
const database_connector_1 = require("../database.connector");
const roles_model_1 = require("../models/roles.model");
const error_handler_1 = require("../../common/error.handler");
class RolesService {
    constructor() {
        this._RolesRepository = database_connector_1.Source.getRepository(roles_model_1.Roles);
        this.allRoles = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._RolesRepository.find();
            return roles_mapper_1.RolesMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const Roles = yield this._RolesRepository.create({
                RoleName: model.RoleName,
                Description: model.Description,
            });
            const response = yield this._RolesRepository.save(Roles);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Roles = yield this._RolesRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!Roles) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Roless not found!");
                }
                if (model.RoleName != null) {
                    Roles.RoleName = model.RoleName;
                }
                if (model.Description != null) {
                    Roles.Description = model.Description;
                }
                var record = yield this._RolesRepository.save(Roles);
                return roles_mapper_1.RolesMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //     const response = await this._RolesRepository.findOne({
        //         where: {
        //             id: id,
        //         },
        //     });
        //     return RolesMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._RolesRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._RolesRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map