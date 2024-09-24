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
exports.FormService = void 0;
const form_model_1 = require("../models/form.model");
const database_connector_1 = require("../database.connector");
const form_mapper_1 = require("../mappers/form.mapper");
///////////////////////////////////////////////////////////////////////
class FormService {
    constructor() {
        //#region Repositories
        this._FormRepository = database_connector_1.Source.getRepository(form_model_1.Form);
        //#endregion
        this.allResponses = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._FormRepository.find();
            return form_mapper_1.FormMapper.toArrayDto(response);
        });
        this.create = (model) => __awaiter(this, void 0, void 0, function* () {
            // Create a new form instance with the provided data
            const form = yield this._FormRepository.create({
                FirstName: model.FirstName,
                Age: model.Age,
                LastName: model.LastName,
            });
            // Save the new form to the database
            const record = yield this._FormRepository.save(form);
            return record;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._FormRepository.findOneBy({
                id: id,
            });
            return response;
        });
        // public update = async (id: uuid, model: FormUpdateModel)
        //     : Promise<FormResponseDto> => {
        //     try {
        //         const Form = await this._FormRepository.findOne({
        //             where: {
        //                 id: id
        //             }
        //         });
        //         if (!Form) {
        //             ErrorHandler.throwNotFoundError('Form not found!');
        //         }
        //         //Form code is not modifiable
        //         //Use renew key to update ApiKey, ValidFrom and ValidTill
        //         if (model.Name != null) {
        //             Form.Name = model.Name;
        //         }
        //         if (model.Description != null) {
        //             Form.Description = model.Description;
        //         }
        //         if (model.ImageUrl != null) {
        //             Form.ImageUrl = model.ImageUrl;
        //         }
        //         var record = await this._FormRepository.save(Form);
        //         return FormMapper.toResponseDto(record);
        //     } catch (error) {
        //         logger.error(error.message);
        //         ErrorHandler.throwInternalServerError(error.message, 500);
        //     }
        // };
        // public delete = async (id: string): Promise<boolean> => {
        //     try {
        //         var record = await this._FormRepository.findOne({
        //             where: {
        //                 id: id
        //             }
        //         });
        //         var result = await this._FormRepository.remove(record);
        //         return result != null;
        //     } catch (error) {
        //         logger.error(error.message);
        //         ErrorHandler.throwInternalServerError(error.message, 500);
        //     }
        // };
    }
}
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map