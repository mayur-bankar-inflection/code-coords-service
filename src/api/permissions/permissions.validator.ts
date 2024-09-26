import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  PermissionsCreateModel,
  PermissionsUpdateModel,
} from "../../domain.types/permissions.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class PermissionsValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<PermissionsCreateModel> => {
    try {
      const schema = joi.object({
        Name: joi.string().optional(),
        Description: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        Name: request.body.Name ?? null,
        Description: request.body.Description ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<PermissionsUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        Name: joi.string().optional(),
        Description: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        Name: request.body.Name ?? null,
        Description: request.body.Description ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
