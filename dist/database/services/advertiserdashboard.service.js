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
exports.AdvertiserDashboardService = void 0;
const advertiserdashboard_mapper_1 = require("../mappers/advertiserdashboard.mapper");
const error_handler_1 = require("../../common/error.handler");
const advertiserdashboard_model_1 = require("../models/advertiserdashboard.model");
const database_connector_1 = require("../database.connector");
const user_model_1 = require("../models/user.model");
class AdvertiserDashboardService {
    constructor() {
        this._AdvertiserDashboardRepository = database_connector_1.Source.getRepository(advertiserdashboard_model_1.AdvertiserDashboard);
        this._UserRepository = database_connector_1.Source.getRepository(user_model_1.User);
        this.allAdvertiserDashboard = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._AdvertiserDashboardRepository.find();
            return advertiserdashboard_mapper_1.AdvertiserDashboardMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUser(model.UserId);
            const advertiser = yield this._AdvertiserDashboardRepository.create({
                user: user,
                TotalAds: model.TotalAds,
                TotalViews: model.TotalViews,
                TotalFollowups: model.TotalFollowups,
                TotalClicks: model.TotalClicks,
            });
            const response = yield this._AdvertiserDashboardRepository.save(advertiser);
            return advertiserdashboard_mapper_1.AdvertiserDashboardMapper.toDto(response);
        });
        this.update = (id, model) => __awaiter(this, void 0, void 0, function* () {
            try {
                const advertiserDashboard = yield this._AdvertiserDashboardRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                if (!advertiserdashboard_model_1.AdvertiserDashboard) {
                    error_handler_1.ErrorHandler.throwNotFoundError("AdvertiserDashboard not found!");
                }
                if (model.TotalAds != null) {
                    advertiserDashboard.TotalAds = model.TotalAds;
                }
                if (model.TotalViews != null) {
                    advertiserDashboard.TotalViews = model.TotalViews;
                }
                if (model.TotalFollowups != null) {
                    advertiserDashboard.TotalFollowups = model.TotalFollowups;
                }
                if (model.TotalClicks != null) {
                    advertiserDashboard.TotalClicks = model.TotalClicks;
                }
                var record = yield this._AdvertiserDashboardRepository.save(advertiserDashboard);
                return advertiserdashboard_mapper_1.AdvertiserDashboardMapper.toDto(record);
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
                var record = yield this._AdvertiserDashboardRepository.findOne({
                    where: {
                        id: id,
                    },
                });
                var result = yield this._AdvertiserDashboardRepository.softRemove(record);
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
    getAdvertise(advertiseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const advertise = yield this._AdvertiserDashboardRepository.findOne({
                where: {
                    id: advertiseId,
                },
            });
            if (!advertise) {
                error_handler_1.ErrorHandler.throwNotFoundError("advertise cannot be found");
            }
            return advertise;
        });
    }
}
exports.AdvertiserDashboardService = AdvertiserDashboardService;
//# sourceMappingURL=advertiserdashboard.service.js.map