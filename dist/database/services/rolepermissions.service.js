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
exports.RolePermissionsService = void 0;
const rolepermissions_mapper_1 = require("../mappers/rolepermissions.mapper");
const database_connector_1 = require("../database.connector");
const rolepermissions_model_1 = require("../models/rolepermissions.model");
const error_handler_1 = require("../../common/error.handler");
class RolePermissionsService {
    constructor() {
        this._RolePermissionsRepository = database_connector_1.Source.getRepository(rolepermissions_model_1.RolePermissions);
        this.allRolePermissions = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._RolePermissionsRepository.find();
            return rolepermissions_mapper_1.RolePermissionsMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const RolePermissions = yield this._RolePermissionsRepository.create({
                UserId: model.UserId,
                PermissionId: model.PermissionId,
            });
            const response = yield this._RolePermissionsRepository.save(RolePermissions);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const RolePermissions = yield this._RolePermissionsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!RolePermissions) {
                    error_handler_1.ErrorHandler.throwNotFoundError("RolePermissionss not found!");
                }
                if (model.UserId != null) {
                    RolePermissions.UserId = model.UserId;
                }
                if (model.PermissionId != null) {
                    RolePermissions.PermissionId = model.PermissionId;
                }
                var record = yield this._RolePermissionsRepository.save(RolePermissions);
                return rolepermissions_mapper_1.RolePermissionsMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //     const response = await this._RolePermissionsRepository.findOne({
        //         where: {
        //             id: id,
        //         },
        //     });
        //     return RolePermissionsMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._RolePermissionsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._RolePermissionsRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.RolePermissionsService = RolePermissionsService;
//# sourceMappingURL=rolepermissions.service.js.map