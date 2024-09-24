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
exports.SocialAuthService = void 0;
const socialauth_mapper_1 = require("../mappers/socialauth.mapper");
const database_connector_1 = require("../database.connector");
const socialauth_model_1 = require("../models/socialauth.model");
const error_handler_1 = require("../../common/error.handler");
class SocialAuthService {
    constructor() {
        this._SocialAuthRepository = database_connector_1.Source.getRepository(socialauth_model_1.SocialAuth);
        this.allSocialAuth = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._SocialAuthRepository.find();
            return socialauth_mapper_1.SocialAuthMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const SocialAuth = yield this._SocialAuthRepository.create({
                Provider: model.Provider,
                ProviderUserId: model.ProviderUserId,
                AccessToken: model.AccessToken,
                RefreshToken: model.RefreshToken,
            });
            const response = yield this._SocialAuthRepository.save(SocialAuth);
            return response;
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const SocialAuth = yield this._SocialAuthRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!SocialAuth) {
                    error_handler_1.ErrorHandler.throwNotFoundError("SocialAuths not found!");
                }
                if (model.Provider != null) {
                    SocialAuth.Provider = model.Provider;
                }
                if (model.ProviderUserId != null) {
                    SocialAuth.ProviderUserId = model.ProviderUserId;
                }
                if (model.AccessToken != null) {
                    SocialAuth.AccessToken = model.AccessToken;
                    if (model.RefreshToken != null) {
                        SocialAuth.RefreshToken = model.RefreshToken;
                    }
                    var record = yield this._SocialAuthRepository.save(SocialAuth);
                    return socialauth_mapper_1.SocialAuthMapper.toDto(record);
                }
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //     const response = await this._SocialAuthRepository.findOne({
        //         where: {
        //             id: id,
        //         },
        //     });
        //     return SocialAuthMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._SocialAuthRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._SocialAuthRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
}
exports.SocialAuthService = SocialAuthService;
//# sourceMappingURL=socialauth.service.js.map