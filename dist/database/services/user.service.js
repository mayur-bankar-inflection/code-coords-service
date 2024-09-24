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
exports.UserService = void 0;
const user_mapper_1 = require("../mappers/user.mapper");
const database_connector_1 = require("../database.connector");
const user_model_1 = require("../models/user.model");
const error_handler_1 = require("../../common/error.handler");
class UserService {
    constructor() {
        this._UserRepository = database_connector_1.Source.getRepository(user_model_1.User);
        this.allUsers = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._UserRepository.find();
            return user_mapper_1.UserMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this._UserRepository.create({
                Name: model.Name,
                Username: model.Username,
                Email: model.Email,
                Bio: model.Bio,
                ProfileImageId: model.ProfileImageId,
                Account: model.Account,
                Password: model.Password,
                Work: model.Work,
                Education: model.Education,
            });
            const response = yield this._UserRepository.save(user);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield this._UserRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!blog) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Users not found!");
                }
                if (model.Name != null) {
                    blog.Name = model.Name;
                }
                if (model.Username != null) {
                    blog.Username = model.Username;
                }
                if (model.Email != null) {
                    blog.Email = model.Email;
                }
                if (model.Bio != null) {
                    blog.Bio = model.Bio;
                }
                if (model.Account != null) {
                    blog.Account = model.Account;
                }
                if (model.ProfileImageId != null) {
                    blog.ProfileImageId = model.ProfileImageId;
                }
                if (model.Password != null) {
                    blog.Password = model.Password;
                }
                if (model.Work != null) {
                    blog.Work = model.Work;
                }
                if (model.Education != null) {
                    blog.Password = model.Password;
                }
                var record = yield this._UserRepository.save(blog);
                return user_mapper_1.UserMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //     const response = await this._UserRepository.findOne({
        //         where: {
        //             id: id,
        //         },
        //     });
        //     return UserMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._UserRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._UserRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map