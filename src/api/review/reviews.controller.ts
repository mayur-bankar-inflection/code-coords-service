import express from "express";
import { ResponseHandler } from "../../common/response.handler";
import { ErrorHandler } from "../../common/error.handler";
import { error } from "console";
import { ReviewsValidator } from "./reviews.validator";
import { ReviewsService } from "../../database/services/reviews.service";
import {
  ReviewsCreateModel,
  ReviewsUpdateModel,
} from "../../domain.types/reviews.domain.types";
import joi from "joi";
///////////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;
export class ReviewsController {
  //#region member variables and constructors
  _service: ReviewsService = new ReviewsService();
  _validator: ReviewsValidator = new ReviewsValidator();
  constructor() {}
  //#endregion
  getAll = async (request: express.Request, response: express.Response) => {
    try {
      const record = await this._service.allReviews();
      if (record === null) {
        ErrorHandler.throwInternalServerError(
          "Unable to Load reviews all sections!",
          error
        );
      }
      const message = "Reviews retrived successfully!";
      return ResponseHandler.success(request, response, message, 201, record);
    } catch (error) {
      ResponseHandler.handleError(request, response, error);
    }
  };
  create = async (request: express.Request, response: express.Response) => {
    try {
      const model: ReviewsCreateModel =
        await this._validator.validateCreateRequest(request);
      const record = await this._service.create(model);
      const message = "Reviews created successfully!";
      return ResponseHandler.success(request, response, message, 201, record);
    } catch (error) {
      ResponseHandler.handleError(request, response, error);
    }
  };
  getById = async (request: express.Request, response: express.Response) => {
    // try {
    //   // await this.authorize('Form.GetById', request, response);
    //   var id: string = await this.validateParamAsUUID(request, "id");
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
      var model: ReviewsUpdateModel =
        await this._validator.validateUpdateRequest(request);
      const updatedRecord = await this._service.update(id, model);
      const message = "Reviews updated successfully!";
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
      var id: string = await this.validateParamAsUUID(request, "id");
      const result = await this._service.delete(id);
      const message = "Form section deleted successfully!";
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
