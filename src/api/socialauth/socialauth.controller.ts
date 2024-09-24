import express from "express";
import { ResponseHandler } from "../../common/response.handler";
import { ErrorHandler } from "../../common/error.handler";
import { error } from "console";
import { SocialAuthValidator } from "./socialauth.validator";
import { SocialAuthService } from "../../database/services/socialauth.service";
import {
  SocialAuthCreateModel,
  SocialAuthUpdateModel,
} from "../../domain.types/socialauth.domain.types";
import joi from "joi";
///////////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class SocialAuthController {
  //#region member variables and constructors

  _service: SocialAuthService = new SocialAuthService();

  _validator: SocialAuthValidator = new SocialAuthValidator();

  constructor() {}

  //#endregion

  getAll = async (request: express.Request, response: express.Response) => {
    try {
      const record = await this._service.allSocialAuth();
      if (record === null) {
        ErrorHandler.throwInternalServerError(
          "Unable to Load all SocialAuth!",
          error
        );
      }
      const message = "All SocialAuth retrived successfully!";
      return ResponseHandler.success(request, response, message, 201, record);
    } catch (error) {
      ResponseHandler.handleError(request, response, error);
    }
  };

  create = async (request: express.Request, response: express.Response) => {
    try {
      const model: SocialAuthCreateModel =
        await this._validator.validateCreateRequest(request);

      const record = await this._service.create(model);
      if (record === null) {
        ErrorHandler.throwInternalServerError(
          "Unable to add SocialAuth !",
          error
        );
      }
      const message = "SocialAuth added successfully!";
      return ResponseHandler.success(request, response, message, 201, record);
    } catch (error) {
      ResponseHandler.handleError(request, response, error);
    }
  };

  getById = async (request: express.Request, response: express.Response) => {
    // try {
    //   // await this.authorize('Form.GetById', request, response);
    //   var id: uuid = await this.validateParamAsUUID(request, "id");
    //   const record = await this._service.getById(id);
    //   const message = "Form section retrieved successfully!";
    //   return ResponseHandler.success(request, response, message, 200, record);
    // } catch (error) {
    //   ResponseHandler.handleError(request, response, error);
    // }
  };

  update = async (request: express.Request, response: express.Response) => {
    try {
      // await this.authorize('Form.Update', request, response);
      const id = await this.validateParamAsUUID(request, "id");
      var model: SocialAuthUpdateModel =
        await this._validator.validateUpdateRequest(request);
      const updatedRecord = await this._service.update(id, model);
      const message = "SocialAuth updated successfully!";
      ResponseHandler.success(request, response, message, 200, updatedRecord);
    } catch (error) {
      ResponseHandler.handleError(request, response, error);
    }
  };

  delete = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      // await this.authorize('Form.Delete', request, response);
      var id: uuid = await this.validateParamAsUUID(request, "id");
      const result = await this._service.delete(id);
      const message = "SocialAuth deleted successfully!";
      ResponseHandler.success(request, response, message, 200, result);
    } catch (error) {
      ResponseHandler.handleError(request, response, error);
    }
  };

  private validateParamAsUUID = async (
    request: express.Request,
    paramName: string
  ): Promise<uuid> => {
    try {
      const schema = joi.string().uuid({ version: "uuidv4" }).required();
      const param = request.params[paramName];
      await schema.validateAsync(param);
      return request.params[paramName];
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
