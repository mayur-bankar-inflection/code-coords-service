import joi, { optional } from "joi";
import express from "express";
import { ErrorHandler } from "../../common/error.handler";
import {
  AdvertiserDashboardCreateModel,
  AdvertiserDashboardUpdateModel,
} from "../../domain.types/advertiserdashboard.domain.types";

///////////////////////////////////////////////////////////////////////////////////////////////

export class AdvertiserDashboardValidator {
  public validateCreateRequest = async (
    request: express.Request
  ): Promise<AdvertiserDashboardCreateModel> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        TotalAds: joi.number().optional(),
        TotalViews: joi.number().optional(),
        TotalFollowups: joi.number().optional(),
        TotalClicks: joi.number().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        TotalAds: request.body.TotalAds ?? null,
        TotalViews: request.body.TotalViews ?? null,
        TotalFollowups: request.body.TotalFollowups ?? null,
        TotalClicks: request.body.TotalClicks ?? null,
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
  ): Promise<AdvertiserDashboardUpdateModel | undefined> => {
    try {
      const schema = joi.object({
        UserId: joi.string().optional(),
        TotalAds: joi.number().optional(),
        TotalViews: joi.number().optional(),
        TotalFollowups: joi.number().optional(),
        TotalClicks: joi.number().optional(),
      });
      await schema.validateAsync(request.body);
      return {
        UserId: request.body.UserId ?? null,
        TotalAds: request.body.TotalAds ?? null,
        TotalViews: request.body.TotalViews ?? null,
        TotalFollowups: request.body.TotalFollowups ?? null,
        TotalClicks: request.body.TotalClicks ?? null,
      };
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  };
}
