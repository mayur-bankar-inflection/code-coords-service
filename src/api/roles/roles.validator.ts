import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  RolesCreateModel,
  RolesUpdateModel,
} from "../../domain.types/roles.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class RolesValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<RolesCreateModel> => {
    try {
      const schema = joi.object({
        RoleName: joi.string().optional(),
        Description: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        RoleName: request.body.RoleName ?? null,
        Description: request.body.Description ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<RolesUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        RoleName: joi.string().optional(),
        Description: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        RoleName: request.body.RoleName ?? null,
        Description: request.body.Description ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
