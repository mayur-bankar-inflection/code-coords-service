import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  SocialAuthCreateModel,
  SocialAuthUpdateModel,
} from "../../domain.types/social.auth.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class SocialAuthValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<SocialAuthCreateModel> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        Provider: joi.string().optional(),
        ProviderUserId: joi.string().optional(),
        AccessToken: joi.string().optional(),
        RefreshToken: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        Provider: request.body.Provider ?? null,
        ProviderUserId: request.body.ProviderUserId ?? null,
        AccessToken: request.body.AccessToken ?? null,
        RefreshToken: request.body.RefreshToken ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<SocialAuthUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        Provider: joi.string().optional(),
        ProviderUserId: joi.string().optional(),
        AccessToken: joi.string().optional(),
        RefreshToken: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        Provider: request.body.Provider ?? null,
        ProviderUserId: request.body.ProviderUserId ?? null,
        AccessToken: request.body.AccessToken ?? null,
        RefreshToken: request.body.RefreshToken ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
