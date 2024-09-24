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
exports.AdvertiseValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
///////////////////////////////////////////////////////////////////////////////////////////////
class AdvertiseValidator {
    constructor() {
        this.validateCreateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                const schema = joi_1.default.object({
                    AdvertiserId: joi_1.default.string().optional(),
                    Title: joi_1.default.string().optional(),
                    Description: joi_1.default.string().optional(),
                    ImageSrc: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    AdvertiserId: (_a = request.body.AdvertiserId) !== null && _a !== void 0 ? _a : null,
                    Title: (_b = request.body.Title) !== null && _b !== void 0 ? _b : null,
                    Description: (_c = request.body.Description) !== null && _c !== void 0 ? _c : null,
                    ImageSrc: (_d = request.body.ImageSrc) !== null && _d !== void 0 ? _d : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
        this.validateUpdateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                const schema = joi_1.default.object({
                    AdvertiserId: joi_1.default.string().optional(),
                    Title: joi_1.default.string().optional(),
                    Description: joi_1.default.string().optional(),
                    ImageSrc: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    AdvertiserId: (_a = request.body.AdvertiserId) !== null && _a !== void 0 ? _a : null,
                    Title: (_b = request.body.Title) !== null && _b !== void 0 ? _b : null,
                    Description: (_c = request.body.Description) !== null && _c !== void 0 ? _c : null,
                    ImageSrc: (_d = request.body.ImageSrc) !== null && _d !== void 0 ? _d : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.AdvertiseValidator = AdvertiseValidator;
//# sourceMappingURL=advertise.validator.js.map