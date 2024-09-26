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
exports.PermissionsService = void 0;
const permissions_mapper_1 = require("../mappers/permissions.mapper");
const database_connector_1 = require("../database.connector");
const permissions_model_1 = require("../models/permissions.model");
const error_handler_1 = require("../../common/error.handler");
class PermissionsService {
    constructor() {
        this._PermissionsRepository = database_connector_1.Source.getRepository(permissions_model_1.Permissions);
        this.allPermissions = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._PermissionsRepository.find();
            return permissions_mapper_1.PermissionsMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const Permissions = yield this._PermissionsRepository.create({
                Name: model.Name,
                Description: model.Description,
            });
            const response = yield this._PermissionsRepository.save(Permissions);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Permissions = yield this._PermissionsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!Permissions) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Permissionss not found!");
                }
                if (model.Name != null) {
                    Permissions.Name = model.Name;
                }
                if (model.Description != null) {
                    Permissions.Description = model.Description;
                }
                var record = yield this._PermissionsRepository.save(Permissions);
                return permissions_mapper_1.PermissionsMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //     const response = await this._PermissionsRepository.findOne({
        //         where: {
        //             id: id,
        //         },
        //     });
        //     return PermissionsMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._PermissionsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._PermissionsRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=permissions.service.js.map