import joi from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  CommentsCreateModel,
  CommentsUpdateModel,
} from "../../domain.types/comments.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class CommentsValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<CommentsCreateModel> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        BlogId: joi.string().optional(),
        Comment: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        BlogId: request.body.BlogId,
        Comment: request.body.Comment ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<CommentsUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        BlogId: joi.string().optional(),
        Comment: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        BlogId: request.body.BlogId,
        Comment: request.body.Comment ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
