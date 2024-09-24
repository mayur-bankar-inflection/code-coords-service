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
exports.SignUpValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
///////////////////////////////////////////////////////////////////////////////////////////////
class SignUpValidator {
    constructor() {
        this.validateCreateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            try {
                const schema = joi_1.default.object({
                    SignUpId: joi_1.default.string().optional(),
                    UserId: joi_1.default.string().optional(),
                    UserName: joi_1.default.string().optional(),
                    Password: joi_1.default.string().optional(),
                    Email: joi_1.default.string().optional(),
                    UserRole: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    SignUpId: (_a = request.body.SignUpId) !== null && _a !== void 0 ? _a : null,
                    UserId: (_b = request.body.UserId) !== null && _b !== void 0 ? _b : null,
                    UserName: (_c = request.body.UserName) !== null && _c !== void 0 ? _c : null,
                    Password: (_d = request.body.Password) !== null && _d !== void 0 ? _d : null,
                    Email: (_e = request.body.Email) !== null && _e !== void 0 ? _e : null,
                    UserRole: (_f = request.body.UserRole) !== null && _f !== void 0 ? _f : null,
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
                    SignUpId: joi_1.default.string().optional(),
                    UserId: joi_1.default.string().optional(),
                    UserName: joi_1.default.string().optional(),
                    Password: joi_1.default.string().optional(),
                    Email: joi_1.default.string().optional(),
                    UserRole: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    SignUpId: (_a = request.body.SignUpId) !== null && _a !== void 0 ? _a : null,
                    UserId: (_b = request.body.UserId) !== null && _b !== void 0 ? _b : null,
                    UserName: (_c = request.body.UserName) !== null && _c !== void 0 ? _c : null,
                    Password: (_d = request.body.Password) !== null && _d !== void 0 ? _d : null,
                    Email: (_e = request.body.Email) !== null && _e !== void 0 ? _e : null,
                    UserRole: (_f = request.body.UserRole) !== null && _f !== void 0 ? _f : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.SignUpValidator = SignUpValidator;
//# sourceMappingURL=signup.validator.js.map