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
exports.UserRolesService = void 0;
const userroles_mapper_1 = require("../mappers/userroles.mapper");
const database_connector_1 = require("../database.connector");
const userroles_model_1 = require("../models/userroles.model");
const error_handler_1 = require("../../common/error.handler");
class UserRolesService {
    constructor() {
        this._UserRolesRepository = database_connector_1.Source.getRepository(userroles_model_1.UserRoles);
        this.allUserRoles = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._UserRolesRepository.find();
            return userroles_mapper_1.UserRolesMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const UserRoles = yield this._UserRolesRepository.create({
                UserId: model.UserId,
                RoleId: model.RoleId,
            });
            const response = yield this._UserRolesRepository.save(UserRoles);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const UserRoles = yield this._UserRolesRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!UserRoles) {
                    ErrorHUserIdhrowNotFoundError("UserRoless not found!");
                }
                if (model.UserId != null) {
                    UserRoles.UserId = model.UserId;
                }
                if (model.RoleId != null) {
                    UserRoles.RoleId = model.RoleId;
                }
                var record = yield this._UserRolesRepository.save(UserRoles);
                return userroles_mapper_1.UserRolesMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //     const response = await this._UserRolesRepository.findOne({
        //         where: {
        //             id: id,
        //         },
        //     });
        //     return UserRolesMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._UserRolesRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._UserRolesRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.UserRolesService = UserRolesService;
function ErrorHUserIdhrowNotFoundError(arg0) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=userroles.service.js.map