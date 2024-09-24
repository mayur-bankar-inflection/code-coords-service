import joi from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  BlogCreateModel,
  BlogUpdateModel,
} from "../../domain.types/blog.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class BlogValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<BlogCreateModel> => {
    try {
      const schema = joi.object({
        UserId: joi.string().uuid().required(),
        Title: joi.string().optional(),
        BlogId: joi.string().optional(),
        Tags: joi.string().optional(),
        Published: joi.boolean().optional(),
        Likes: joi.number().optional(),
        Save: joi.number().optional(),
        CommentId: joi.string().uuid().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId,
        Title: request.body.Title ?? null,
        BlogId: request.body.BlogId,
        Tags: request.body.Tags ?? null,
        Published: request.body.Published ?? null,
        Likes: request.body.Likes ?? null,
        Save: request.body.Save ?? null,
        CommentId: request.body.CommentId ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
      // return {
      //   Title: "",
      //   BlogId: "",
      //   Tags: "",
      //   Published: true,
      //   Likes: 0,
      //   Save: 0,
      //   CommentId: "",
      // };
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<BlogUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        UserId: joi.string().uuid().optional(),
        Title: joi.string().optional(),
        BlogId: joi.string().optional(),
        Tags: joi.string().optional(),
        Published: joi.boolean().optional(),
        Likes: joi.number().optional(),
        Save: joi.number().optional(),
        CommentId: joi.string().uuid().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId,
        Title: request.body.Title ?? null,
        BlogId: request.body.BlogId ?? null,
        Tags: request.body.Tags ?? null,
        Published: request.body.Published ?? null,
        Likes: request.body.Likes ?? null,
        Save: request.body.Save ?? null,
        CommentId: request.body.CommentId ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
