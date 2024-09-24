import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  UserRolesCreateModel,
  UserRolesUpdateModel,
} from "../../domain.types/userroles.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class UserRolesValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<UserRolesCreateModel> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        RoleId: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.RoleName ?? null,
        RoleId: request.body.Description ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<UserRolesUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        RoleId: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.RoleName ?? null,
        RoleId: request.body.Description ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
