import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  UserCreateModel,
  UserUpdateModel,
} from "../../domain.types/user.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class UserValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<UserCreateModel> => {
    try {
      const schema = joi.object({
        Name: joi.string().optional(),
        Username: joi.string().optional(),
        Email: joi.string().optional(),
        Bio: joi.string().optional(),
        Account: joi.boolean().optional(),
        ProfileImageId: joi.string().optional(),
        Password: joi.string().optional(),
        Work: joi.string().optional(),
        Education: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        Name: request.body.Name,
        Username: request.body.Username ?? null,
        Email: request.body.Email ?? null,
        Bio: request.body.Bio ?? null,
        Account: request.body.Account ?? null,
        ProfileImageId: request.body.ProfileImageId ?? null,
        Password: request.body.Password ?? null,
        Work: request.body.Work ?? null,
        Education: request.body.Education ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
      // return {
      //   Name: "",
      //   Username: "",
      //   Email: "",
      //   Bio: "",
      //   Account: "",
      //   ProfileImageId: "",
      //   Password: "",
      //   Work: "",
      //   Education: "",
      // };
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<UserUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        Name: joi.string().optional(),
        Username: joi.string().optional(),
        Email: joi.string().optional(),
        Bio: joi.string().optional(),
        Account: joi.boolean().optional(),
        ProfileImageId: joi.string().optional(),
        Password: joi.string().optional(),
        Work: joi.string().optional(),
        Education: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        Name: request.body.Name,
        Username: request.body.Username ?? null,
        Email: request.body.Email ?? null,
        Bio: request.body.Bio ?? null,
        Account: request.body.Account ?? null,
        ProfileImageId: request.body.ProfileImageId ?? null,
        Password: request.body.Password ?? null,
        Work: request.body.Work ?? null,
        Education: request.body.Education ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
