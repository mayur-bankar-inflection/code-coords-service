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
exports.ReviewsService = void 0;
const reviews_mapper_1 = require("../mappers/reviews.mapper");
const error_handler_1 = require("../../common/error.handler");
const reviews_model_1 = require("../models/reviews.model");
const database_connector_1 = require("../database.connector");
class ReviewsService {
    constructor() {
        this._ReviewsRepository = database_connector_1.Source.getRepository(reviews_model_1.Reviews);
        this.allReviews = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._ReviewsRepository.find();
            return reviews_mapper_1.ReviewsMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUser(model.UserId);
            const reviews = yield this._ReviewsRepository.create({
                User: user,
                BlogId: model.BlogId,
                UserId: model.UserId,
                Status: model.Status,
            });
            const response = yield this._ReviewsRepository.save(reviews);
            return reviews_mapper_1.ReviewsMapper.toDto(response);
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield this._ReviewsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!reviews) {
                    error_handler_1.ErrorHandler.throwNotFoundError("reviews not found!");
                }
                if (model.BlogId != null) {
                    reviews.BlogId = model.BlogId;
                }
                if (model.UserId != null) {
                    reviews.UserId = model.UserId;
                }
                if (model.Status != null) {
                    reviews.Status = model.Status;
                }
                var record = yield this._ReviewsRepository.save(reviews);
                return reviews_mapper_1.ReviewsMapper.toDto(record);
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
        // getById = async (id: string) => {
        //   const response = await this._AdvertiseRepository.findUnique({
        //     where: {
        //       id: id,
        //       DeletedAt: null,
        //     },
        //   });
        //   return AdvertiseMapper.toDto(response);
        // };
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                var record = yield this._ReviewsRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._ReviewsRepository.remove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._ReviewsRepository.findOne({
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
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map