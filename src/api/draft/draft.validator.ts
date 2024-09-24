import joi from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  DraftCreateModel,
  DraftUpdateModel,
} from "../../domain.types/draft.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class DraftValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<DraftCreateModel> => {
    try {
      const schema = joi.object({
        BlogId: joi.string().optional(),
        UserId: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        BlogId: request.body.BlogId ?? null,
        UserId: request.body.UserId ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<DraftUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        BlogId: joi.string().optional(),
        UserId: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        BlogId: request.body.BlogId ?? null,
        UserId: request.body.UserId ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
