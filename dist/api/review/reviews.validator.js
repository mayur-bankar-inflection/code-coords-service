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
exports.ReviewsValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
///////////////////////////////////////////////////////////////////////////////////////////////
class ReviewsValidator {
    constructor() {
        this.validateCreateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const schema = joi_1.default.object({
                    UserId: joi_1.default.string().optional(),
                    BlogId: joi_1.default.string().optional(),
                    Status: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    UserId: (_a = request.body.UserId) !== null && _a !== void 0 ? _a : null,
                    BlogId: (_b = request.body.BlogId) !== null && _b !== void 0 ? _b : null,
                    Status: (_c = request.body.Status) !== null && _c !== void 0 ? _c : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
        this.validateUpdateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            try {
                const schema = joi_1.default.object({
                    UserId: (_a = request.body.UserId) !== null && _a !== void 0 ? _a : null,
                    BlogId: (_b = request.body.BlogId) !== null && _b !== void 0 ? _b : null,
                    Status: (_c = request.body.Status) !== null && _c !== void 0 ? _c : null,
                });
                yield schema.validateAsync(request.body);
                return {
                    UserId: (_d = request.body.UserId) !== null && _d !== void 0 ? _d : null,
                    BlogId: (_e = request.body.BlogId) !== null && _e !== void 0 ? _e : null,
                    Status: (_f = request.body.Status) !== null && _f !== void 0 ? _f : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.ReviewsValidator = ReviewsValidator;
//# sourceMappingURL=reviews.validator.js.map