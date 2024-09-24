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
exports.BlogService = void 0;
const blog_mapper_1 = require("../mappers/blog.mapper");
const database_connector_1 = require("../database.connector");
const blog_model_1 = require("../models/blog.model");
const error_handler_1 = require("../../common/error.handler");
const user_model_1 = require("../models/user.model");
class BlogService {
    constructor() {
        this._BlogRepository = database_connector_1.Source.getRepository(blog_model_1.Blog);
        this._UserRepository = database_connector_1.Source.getRepository(user_model_1.User);
        this.allBlogs = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._BlogRepository.find({ withDeleted: false });
            return blog_mapper_1.BlogMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUser(model.UserId);
            const blog = this._BlogRepository.create({
                user: user,
                Title: model.Title,
                BlogId: model.BlogId,
                Tags: model.Tags,
                Published: model.Published,
                CommentId: model.CommentId,
                Save: model.Save,
                Likes: model.Likes,
            });
            // Save the blog to the database
            const response = yield this._BlogRepository.save(blog);
            return blog_mapper_1.BlogMapper.toDto(response);
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield this._BlogRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!blog) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Blogs not found!");
                }
                if (model.Title != null) {
                    blog.Title = model.Title;
                }
                if (model.BlogId != null) {
                    blog.BlogId = model.BlogId;
                }
                if (model.Tags != null) {
                    blog.Tags = model.Tags;
                }
                if (model.Published != null) {
                    blog.Published = model.Published;
                }
                if (model.Likes != null) {
                    blog.Likes = model.Likes;
                }
                if (model.CommentId != null) {
                    blog.CommentId = model.CommentId;
                }
                if (model.Save != null) {
                    blog.Save = model.Save;
                }
                var record = yield this._BlogRepository.save(blog);
                return blog_mapper_1.BlogMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //   const response = await this._BlogRepository.findOne({
        //     where: {
        //       id: id,
        //       DeletedAt: null,
        //     },
        //   });
        //   return BlogMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._BlogRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._BlogRepository.softRemove(record);
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
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map