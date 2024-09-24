import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  UsersCreateModel,
  UsersUpdateModel,
} from "../../domain.types/users.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class UsersValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<UsersCreateModel> => {
    try {
      const schema = joi.object({
        Email: joi.string().optional(),
        Phone: joi.string().optional(),
        PasswordHash: joi.string().optional(),
        IsActive: joi.boolean().optional(),
        IsEmailVerified: joi.boolean().optional(),
        IsPhoneVerified: joi.boolean().optional(),        
      });
      await schema.validateAsync(request.body);
      return {
        Email: request.body.Email ?? null,
        Phone: request.body.Phone ?? null,
        PasswordHash: request.body.PasswordHash ?? null,
        IsActive: request.body.IsActive ?? null,
        IsEmailVerified: request.body.IsEmailVerified ?? null,
        IsPhoneVerified: request.body.IsPhoneVerified ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<UsersUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        Email: joi.string().optional(),
        Phone: joi.string().optional(),
        PasswordHash: joi.string().optional(),
        IsActive: joi.boolean().optional(),
        IsEmailVerified: joi.boolean().optional(),
        IsPhoneVerified: joi.boolean().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        Email: request.body.Email ?? null,
        Phone: request.body.Phone ?? null,
        PasswordHash: request.body.PasswordHash ?? null,
        IsActive: request.body.IsActive ?? null,
        IsEmailVerified: request.body.IsEmailVerified ?? null,
        IsPhoneVerified: request.body.IsPhoneVerified ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
