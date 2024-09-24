import joi from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  AdvertiseCreateModel,
  AdvertiseUpdateModel,
} from "../../domain.types/advertise.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class AdvertiseValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<AdvertiseCreateModel> => {
    try {
      const schema = joi.object({
        AdvertiserId:joi.string().optional(),
        Title: joi.string().optional(),
        Description: joi.string().optional(),
        ImageSrc: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        AdvertiserId:request.body.AdvertiserId ?? null,
        Title: request.body.Title ?? null,
        Description: request.body.Description ?? null,
        ImageSrc: request.body.ImageSrc ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };

  public validateUpdateRequest = async (
    request: express.Request
  ): Promise<AdvertiseUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        AdvertiserId:joi.string().optional(),
        Title: joi.string().optional(),
        Description: joi.string().optional(),
        ImageSrc: joi.string().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        AdvertiserId:request.body.AdvertiserId ?? null,
        Title: request.body.Title ?? null,
        Description: request.body.Description ?? null,
        ImageSrc: request.body.ImageSrc ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
