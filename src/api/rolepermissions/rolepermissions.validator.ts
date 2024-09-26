import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  RolePermissionsCreateModel,
  RolePermissionsUpdateModel,
} from "../../domain.types/rolepermissions.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class RolePermissionsValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<RolePermissionsCreateModel> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        RoleId: joi.string().optional(),
        PermissionsId: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        RoleId: request.body.RoleId ?? null,
        PermissionId: request.body.PermissionId ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<RolePermissionsUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        RoleId: joi.string().optional(),
        PermissionsId: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        RoleId: request.body.RoleId ?? null,
        PermissionId: request.body.PermissionId ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
