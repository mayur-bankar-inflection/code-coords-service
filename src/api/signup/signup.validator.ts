import joi from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  SignUpCreateModel,
  SignUpUpdateModel,
} from "../../domain.types/signup.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class SignUpValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<SignUpCreateModel> => {
    try {
      const schema = joi.object({
        SignUpId: joi.string().optional(),
        UserId: joi.string().optional(),
        UserName: joi.string().optional(),
        Password: joi.string().optional(),
        Email: joi.string().optional(),
        UserRole: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        SignUpId: request.body.SignUpId ?? null,
        UserId: request.body.UserId ?? null,
        UserName: request.body.UserName ?? null,
        Password: request.body.Password ?? null,
        Email: request.body.Email ?? null,
        UserRole: request.body.UserRole ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<SignUpUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        SignUpId: joi.string().optional(),
        UserId: joi.string().optional(),
        UserName: joi.string().optional(),
        Password: joi.string().optional(),
        Email: joi.string().optional(),
        UserRole: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        SignUpId: request.body.SignUpId ?? null,
        UserId: request.body.UserId ?? null,
        UserName: request.body.UserName ?? null,
        Password: request.body.Password ?? null,
        Email: request.body.Email ?? null,
        UserRole: request.body.UserRole ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
