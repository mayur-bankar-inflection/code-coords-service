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
exports.UsersService = void 0;
const users_mapper_1 = require("../mappers/users.mapper");
const database_connector_1 = require("../database.connector");
const users_model_1 = require("../models/users.model");
const error_handler_1 = require("../../common/error.handler");
class UsersService {
    constructor() {
        this._UsersRepository = database_connector_1.Source.getRepository(users_model_1.Users);
        this.allUsers = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._UsersRepository.find();
            return users_mapper_1.UsersMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const Users = yield this._UsersRepository.create({
                Email: model.Email,
                Phone: model.Phone,
                PasswordHash: model.PasswordHash,
                IsActive: model.IsActive,
                IsEmailVerified: model.IsEmailVerified,
                IsPhoneVerified: model.IsPhoneVerified,
            });
            const response = yield this._UsersRepository.save(Users);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this._UsersRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!users) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Userss not found!");
                }
                if (model.Email != null) {
                    users.Email = model.Email;
                }
                if (model.Phone != null) {
                    users.Phone = model.Phone;
                }
                if (model.PasswordHash != null) {
                    users.PasswordHash = model.PasswordHash;
                    if (model.IsActive != null) {
                        users.IsActive = model.IsActive;
                    }
                    if (model.IsEmailVerified != null) {
                        users.IsEmailVerified = model.IsEmailVerified;
                    }
                    if (model.IsPhoneVerified != null) {
                        users.IsPhoneVerified = model.IsPhoneVerified;
                    }
                    var record = yield this._UsersRepository.save(users);
                    return users_mapper_1.UsersMapper.toDto(record);
                }
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //     const response = await this._UsersRepository.findOne({
        //         where: {
        //             id: id,
        //         },
        //     });
        //     return UsersMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._UsersRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._UsersRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map