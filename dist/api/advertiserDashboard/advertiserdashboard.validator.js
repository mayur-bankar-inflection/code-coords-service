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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertiserDashboardValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
///////////////////////////////////////////////////////////////////////////////////////////////
class AdvertiserDashboardValidator {
    constructor() {
        this.validateCreateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const schema = joi_1.default.object({
                    UserId: joi_1.default.string().optional(),
                    TotalAds: joi_1.default.number().optional(),
                    TotalViews: joi_1.default.number().optional(),
                    TotalFollowups: joi_1.default.number().optional(),
                    TotalClicks: joi_1.default.number().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    UserId: (_a = request.body.UserId) !== null && _a !== void 0 ? _a : null,
                    TotalAds: (_b = request.body.TotalAds) !== null && _b !== void 0 ? _b : null,
                    TotalViews: (_c = request.body.TotalViews) !== null && _c !== void 0 ? _c : null,
                    TotalFollowups: (_d = request.body.TotalFollowups) !== null && _d !== void 0 ? _d : null,
                    TotalClicks: (_e = request.body.TotalClicks) !== null && _e !== void 0 ? _e : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
                // return {
                //   Name: "",
                //   Username: "",
                //   Email: "",
                //   Bio: "",
                //   Account: "",
                //   ProfileImageId: "",
                //   Password: "",
                //   Work: "",
                //   Education: "",
                // };
            }
        });
        this.validateUpdateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const schema = joi_1.default.object({
                    UserId: joi_1.default.string().optional(),
                    TotalAds: joi_1.default.number().optional(),
                    TotalViews: joi_1.default.number().optional(),
                    TotalFollowups: joi_1.default.number().optional(),
                    TotalClicks: joi_1.default.number().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    UserId: (_a = request.body.UserId) !== null && _a !== void 0 ? _a : null,
                    TotalAds: (_b = request.body.TotalAds) !== null && _b !== void 0 ? _b : null,
                    TotalViews: (_c = request.body.TotalViews) !== null && _c !== void 0 ? _c : null,
                    TotalFollowups: (_d = request.body.TotalFollowups) !== null && _d !== void 0 ? _d : null,
                    TotalClicks: (_e = request.body.TotalClicks) !== null && _e !== void 0 ? _e : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.AdvertiserDashboardValidator = AdvertiserDashboardValidator;
//# sourceMappingURL=advertiserdashboard.validator.js.map