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
exports.SignUpService = void 0;
const signup_mapper_1 = require("../mappers/signup.mapper");
const database_connector_1 = require("../database.connector");
const signup_model_1 = require("../models/signup.model");
const error_handler_1 = require("../../common/error.handler");
class SignUpService {
    constructor() {
        this._SignUpRepository = database_connector_1.Source.getRepository(signup_model_1.SignUp);
        this.allSignUp = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._SignUpRepository.find();
            return signup_mapper_1.SignUpMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this._SignUpRepository.create({
                UserName: model.UserName,
                Password: model.Password,
                Email: model.Email,
                UserRole: model.UserRole,
            });
            const response = yield this._SignUpRepository.save(user);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const signup = yield this._SignUpRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!signup) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Users not found!");
                }
                if (model.SignUpId != null) {
                    signup.SignUpId = model.SignUpId;
                }
                if (model.UserId != null) {
                    signup.UserId = model.UserId;
                }
                if (model.UserName != null) {
                    signup.UserName = model.UserName;
                }
                if (model.Password != null) {
                    signup.Password = model.Password;
                }
                if (model.Email != null) {
                    signup.Email = model.Email;
                }
                if (model.UserRole != null) {
                    signup.UserRole = model.UserRole;
                }
                var record = yield this._SignUpRepository.save(signup);
                return signup_mapper_1.SignUpMapper.toDto(record);
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
                var record = yield this._SignUpRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._SignUpRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.SignUpService = SignUpService;
//# sourceMappingURL=signup.service.js.map