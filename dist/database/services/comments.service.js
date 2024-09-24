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
exports.CommentsService = void 0;
const comments_mapper_1 = require("../mappers/comments.mapper");
const database_connector_1 = require("../database.connector");
const comments_model_1 = require("../models/comments.model");
const error_handler_1 = require("../../common/error.handler");
const user_model_1 = require("../models/user.model");
class CommentsService {
    constructor() {
        this._CommentsRepository = database_connector_1.Source.getRepository(comments_model_1.Comments);
        this._UserRepository = database_connector_1.Source.getRepository(user_model_1.User);
        this.allCommentss = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._CommentsRepository.find({
                withDeleted: false,
            });
            return comments_mapper_1.CommentsMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUser(model.UserId);
            const Comments = this._CommentsRepository.create({
                User: user,
                BlogId: model.BlogId,
                Comment: model.Comment,
            });
            // Save the Comments to the database
            const response = yield this._CommentsRepository.save(Comments);
            return comments_mapper_1.CommentsMapper.toDto(response);
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Comments = yield this._CommentsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!Comments) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Commentss not found!");
                }
                if (model.BlogId != null) {
                    Comments.BlogId = model.BlogId;
                }
                if (model.Comment != null) {
                    Comments.Comment = model.Comment;
                }
                var record = yield this._CommentsRepository.save(Comments);
                return comments_mapper_1.CommentsMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //   const response = await this._CommentsRepository.findUnique({
        //     where: {
        //       id: id,
        //       DeletedAt: null,
        //     },
        //   });
        //   return CommentsMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._CommentsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._CommentsRepository.softRemove(record);
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
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map