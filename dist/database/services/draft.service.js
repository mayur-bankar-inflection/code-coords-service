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
exports.DraftService = void 0;
const draft_mapper_1 = require("../mappers/draft.mapper");
const draft_model_1 = require("../models/draft.model");
const database_connector_1 = require("../database.connector");
const error_handler_1 = require("../../common/error.handler");
const user_model_1 = require("../models/user.model");
class DraftService {
    constructor() {
        this._DraftRepository = database_connector_1.Source.getRepository(draft_model_1.Draft);
        this._UserRepository = database_connector_1.Source.getRepository(user_model_1.User);
        this.allDrafts = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._DraftRepository.find({ withDeleted: false });
            return draft_mapper_1.DraftMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUser(model.UserId);
            const Draft = this._DraftRepository.create({
                User: user,
                BlogId: model.BlogId,
            });
            // Save the Draft to the database
            const response = yield this._DraftRepository.save(Draft);
            return draft_mapper_1.DraftMapper.toDto(response);
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Draft = yield this._DraftRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!Draft) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Drafts not found!");
                }
                if (model.BlogId != null) {
                    Draft.BlogId = model.BlogId;
                }
                var record = yield this._DraftRepository.save(Draft);
                return draft_mapper_1.DraftMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //   const response = await this._DraftRepository.findUnique({
        //     where: {
        //       id: id,
        //       DeletedAt: null,
        //     },
        //   });
        //   return DraftMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._DraftRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._DraftRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._UserRepository.findOne({
                where: {
                    id: userId,
                },
            });
            if (!user) {
                error_handler_1.ErrorHandler.throwNotFoundError("user cannot be found");
            }
            return user;
        });
    }
}
exports.DraftService = DraftService;
//# sourceMappingURL=draft.service.js.map