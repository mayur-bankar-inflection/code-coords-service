import joi from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  ReviewsCreateModel,
  ReviewsUpdateModel,
} from "../../domain.types/reviews.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class ReviewsValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<ReviewsCreateModel> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        BlogId: joi.string().optional(),
        Status: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId:request.body.UserId ?? null,
        BlogId: request.body.BlogId ?? null,
        Status: request.body.Status ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<ReviewsUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        UserId:request.body.UserId ?? null,
        BlogId: request.body.BlogId ?? null,
        Status: request.body.Status ?? null,
      });
      await schema.validateAsync(request.body);
      return {
        UserId:request.body.UserId ?? null,
        BlogId: request.body.BlogId ?? null,
        Status: request.body.Status ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
