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
exports.UserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
///////////////////////////////////////////////////////////////////////////////////////////////
class UserValidator {
    constructor() {
        this.validateCreateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            try {
                const schema = joi_1.default.object({
                    Name: joi_1.default.string().optional(),
                    Username: joi_1.default.string().optional(),
                    Email: joi_1.default.string().optional(),
                    Bio: joi_1.default.string().optional(),
                    Account: joi_1.default.boolean().optional(),
                    ProfileImageId: joi_1.default.string().optional(),
                    Password: joi_1.default.string().optional(),
                    Work: joi_1.default.string().optional(),
                    Education: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    Name: request.body.Name,
                    Username: (_a = request.body.Username) !== null && _a !== void 0 ? _a : null,
                    Email: (_b = request.body.Email) !== null && _b !== void 0 ? _b : null,
                    Bio: (_c = request.body.Bio) !== null && _c !== void 0 ? _c : null,
                    Account: (_d = request.body.Account) !== null && _d !== void 0 ? _d : null,
                    ProfileImageId: (_e = request.body.ProfileImageId) !== null && _e !== void 0 ? _e : null,
                    Password: (_f = request.body.Password) !== null && _f !== void 0 ? _f : null,
                    Work: (_g = request.body.Work) !== null && _g !== void 0 ? _g : null,
                    Education: (_h = request.body.Education) !== null && _h !== void 0 ? _h : null,
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
            var _a, _b, _c, _d, _e, _f, _g, _h;
            try {
                const schema = joi_1.default.object({
                    Name: joi_1.default.string().optional(),
                    Username: joi_1.default.string().optional(),
                    Email: joi_1.default.string().optional(),
                    Bio: joi_1.default.string().optional(),
                    Account: joi_1.default.boolean().optional(),
                    ProfileImageId: joi_1.default.string().optional(),
                    Password: joi_1.default.string().optional(),
                    Work: joi_1.default.string().optional(),
                    Education: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    Name: request.body.Name,
                    Username: (_a = request.body.Username) !== null && _a !== void 0 ? _a : null,
                    Email: (_b = request.body.Email) !== null && _b !== void 0 ? _b : null,
                    Bio: (_c = request.body.Bio) !== null && _c !== void 0 ? _c : null,
                    Account: (_d = request.body.Account) !== null && _d !== void 0 ? _d : null,
                    ProfileImageId: (_e = request.body.ProfileImageId) !== null && _e !== void 0 ? _e : null,
                    Password: (_f = request.body.Password) !== null && _f !== void 0 ? _f : null,
                    Work: (_g = request.body.Work) !== null && _g !== void 0 ? _g : null,
                    Education: (_h = request.body.Education) !== null && _h !== void 0 ? _h : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.UserValidator = UserValidator;
//# sourceMappingURL=user.validator.js.map