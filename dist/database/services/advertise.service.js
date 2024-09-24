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
exports.AdvertiseService = void 0;
const advertise_mapper_1 = require("../mappers/advertise.mapper");
const error_handler_1 = require("../../common/error.handler");
const advertise_model_1 = require("../models/advertise.model");
const database_connector_1 = require("../database.connector");
const advertiserdashboard_model_1 = require("../models/advertiserdashboard.model");
class AdvertiseService {
    constructor() {
        this._AdvertiseRepository = database_connector_1.Source.getRepository(advertise_model_1.Advertise);
        this._AdvertiserDashboardRepository = database_connector_1.Source.getRepository(advertiserdashboard_model_1.AdvertiserDashboard);
        this.allAdvertisers = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._AdvertiseRepository.find();
            return advertise_mapper_1.AdvertiseMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const advertiser = yield this.getAdvertiser(model.AdvertiserId);
            const advertise_res = yield this._AdvertiseRepository.create({
                Title: model.Title,
                advertiserDashboard: advertiser,
                Description: model.Description,
                ImageSrc: model.ImageSrc,
            });
            const response = yield this._AdvertiseRepository.save(advertise_res);
            return advertise_mapper_1.AdvertiseMapper.toDto(response);
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const advertise = yield this._AdvertiseRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!advertise) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Blogs not found!");
                }
                if (model.Title != null) {
                    advertise.Title = model.Title;
                }
                if (model.Description != null) {
                    advertise.Description = model.Description;
                }
                if (model.ImageSrc != null) {
                    advertise.ImageSrc = model.ImageSrc;
                }
                var record = yield this._AdvertiseRepository.save(advertise);
                return advertise_mapper_1.AdvertiseMapper.toDto(record);
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
                var record = yield this._AdvertiseRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._AdvertiseRepository.softRemove(record);
                return result != null;
            }
            catch (error) {
                error_handler_1.ErrorHandler.throwInternalServerError(error.message, 500);
            }
        });
    }
    getAdvertiser(advertiserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const advertiser = yield this._AdvertiserDashboardRepository.findOne({
                where: {
                    id: advertiserId,
                },
            });
            if (!advertiser) {
                error_handler_1.ErrorHandler.throwNotFoundError("advertiser dashboard cannot be found");
            }
            return advertiser;
        });
    }
}
exports.AdvertiseService = AdvertiseService;
//# sourceMappingURL=advertise.service.js.map