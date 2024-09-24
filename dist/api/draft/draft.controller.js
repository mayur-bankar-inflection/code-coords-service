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
exports.DraftController = void 0;
const response_handler_1 = require("../../common/response.handler");
const error_handler_1 = require("../../common/error.handler");
const console_1 = require("console");
const draft_validator_1 = require("./draft.validator");
const draft_service_1 = require("../../database/services/draft.service");
const joi_1 = __importDefault(require("joi"));
class DraftController {
    constructor() {
        //#region member variables and constructors
        this._service = new draft_service_1.DraftService();
        this._validator = new draft_validator_1.DraftValidator();
        //#endregion
        this.getAll = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this._service.allDrafts();
                if (record === null) {
                    error_handler_1.ErrorHandler.throwInternalServerError("Unable to LoDraft all sections!", console_1.error);
                }
                const message = "All form sections retrived successfully!";
                return response_handler_1.ResponseHandler.success(request, response, message, 201, record);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(request, response, error);
            }
        });
        this.create = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const model = yield this._validator.validateCreateRequest(request);
                const record = yield this._service.create(model);
                const message = "Form section Draftded successfully!";
                return response_handler_1.ResponseHandler.success(request, response, message, 201, record);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(request, response, error);
            }
        });
        this.getById = (request, response) => __awaiter(this, void 0, void 0, function* () {
            // try {
            //   // await this.authorize('Form.GetById', request, response);
            //   var id: string = await this.validateParamAsUUID(request, "id");
            //   const record = await this._service.getById(id);
            //   const message = "Form section retrieved successfully!";
            //   return ResponseHandler.success(request, response, message, 200, record);
            // } catch (error) {
            //   ResponseHandler.handleError(request, response, error);
            // }
        });
        this.update = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                // await this.authorize('Form.Update', request, response);
                const id = yield this.validateParamAsUUID(request, "id");
                var model = yield this._validator.validateUpdateRequest(request);
                const updatedRecord = yield this._service.update(id, model);
                const message = "Form section updated successfully!";
                response_handler_1.ResponseHandler.success(request, response, message, 200, updatedRecord);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(request, response, error);
            }
        });
        this.delete = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                // await this.authorize('Form.Delete', request, response);
                var id = yield this.validateParamAsUUID(request, "id");
                const result = yield this._service.delete(id);
                const message = "Form section deleted successfully!";
                response_handler_1.ResponseHandler.success(request, response, message, 200, result);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(request, response, error);
            }
        });
        this.validateParamAsUUID = (request, paramName) => __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.string().uuid({ version: "uuidv4" }).required();
                const param = request.params[paramName];
                yield schema.validateAsync(param);
                return request.params[paramName];
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.DraftController = DraftController;
//# sourceMappingURL=draft.controller.js.map