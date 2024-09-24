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
exports.UsersValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
///////////////////////////////////////////////////////////////////////////////////////////////
class UsersValidator {
    constructor() {
        this.validateCreateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            try {
                const schema = joi_1.default.object({
                    Email: joi_1.default.string().optional(),
                    Phone: joi_1.default.string().optional(),
                    PasswordHash: joi_1.default.string().optional(),
                    IsActive: joi_1.default.boolean().optional(),
                    IsEmailVerified: joi_1.default.boolean().optional(),
                    IsPhoneVerified: joi_1.default.boolean().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    Email: (_a = request.body.Email) !== null && _a !== void 0 ? _a : null,
                    Phone: (_b = request.body.Phone) !== null && _b !== void 0 ? _b : null,
                    PasswordHash: (_c = request.body.PasswordHash) !== null && _c !== void 0 ? _c : null,
                    IsActive: (_d = request.body.IsActive) !== null && _d !== void 0 ? _d : null,
                    IsEmailVerified: (_e = request.body.IsEmailVerified) !== null && _e !== void 0 ? _e : null,
                    IsPhoneVerified: (_f = request.body.IsPhoneVerified) !== null && _f !== void 0 ? _f : null,
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
                    Email: joi_1.default.string().optional(),
                    Phone: joi_1.default.string().optional(),
                    PasswordHash: joi_1.default.string().optional(),
                    IsActive: joi_1.default.boolean().optional(),
                    IsEmailVerified: joi_1.default.boolean().optional(),
                    IsPhoneVerified: joi_1.default.boolean().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    Email: (_a = request.body.Email) !== null && _a !== void 0 ? _a : null,
                    Phone: (_b = request.body.Phone) !== null && _b !== void 0 ? _b : null,
                    PasswordHash: (_c = request.body.PasswordHash) !== null && _c !== void 0 ? _c : null,
                    IsActive: (_d = request.body.IsActive) !== null && _d !== void 0 ? _d : null,
                    IsEmailVerified: (_e = request.body.IsEmailVerified) !== null && _e !== void 0 ? _e : null,
                    IsPhoneVerified: (_f = request.body.IsPhoneVerified) !== null && _f !== void 0 ? _f : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.UsersValidator = UsersValidator;
//# sourceMappingURL=users.validator.js.map