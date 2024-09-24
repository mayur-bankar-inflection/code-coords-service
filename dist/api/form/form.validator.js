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
exports.FormValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
// ///////////////////////////////////////////////////////////////////////////////////////////////
class FormValidator {
    constructor() {
        this.validateCreateRequest = (request) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const schema = joi_1.default.object({
                    FirstName: joi_1.default.string().optional(),
                    Age: joi_1.default.number().optional(),
                    LastName: joi_1.default.string().optional(),
                });
                yield schema.validateAsync(request.body);
                return {
                    FirstName: (_a = request.body.FirstName) !== null && _a !== void 0 ? _a : null,
                    Age: (_b = request.body.Age) !== null && _b !== void 0 ? _b : null,
                    LastName: (_c = request.body.LastName) !== null && _c !== void 0 ? _c : null,
                };
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
                return {
                    FirstName: "",
                    LastName: "",
                    Age: 0,
                };
            }
        });
    }
}
exports.FormValidator = FormValidator;
//# sourceMappingURL=form.validator.js.map