import { AdvertiserDashboardMapper } from "../mappers/advertiserdashboard.mapper";
import {
  AdvertiserDashboardCreateModel,
  AdvertiserDashboardResponseDto,
  AdvertiserDashboardUpdateModel,
} from "../../domain.types/advertiserdashboard.domain.types";
import { Repository } from "typeorm";
import { ErrorHandler } from "../../common/error.handler";
import { AdvertiserDashboard } from "../models/advertiserdashboard.model";
import { Source } from "../database.connector";
import { User } from "../models/user.model";

////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class AdvertiserDashboardService {
  _AdvertiserDashboardRepository: Repository<AdvertiserDashboard> =
    Source.getRepository(AdvertiserDashboard);
    _UserRepository: Repository<User> = Source.getRepository(User);

  allAdvertiserDashboard = async () => {
    const response = await this._AdvertiserDashboardRepository.find();
    return AdvertiserDashboardMapper.toArrayDto(response);
  };

  create = async (model: AdvertiserDashboardCreateModel) => {
    const user = await this.getUser(model.UserId);
    const advertiser = await this._AdvertiserDashboardRepository.create({
      user:user,
      TotalAds: model.TotalAds,
      TotalViews: model.TotalViews,
      TotalFollowups: model.TotalFollowups,
      TotalClicks: model.TotalClicks,
    });

    const response = await this._AdvertiserDashboardRepository.save(advertiser);
    return AdvertiserDashboardMapper.toDto(response);
  };

  public update = async (
    id: uuid,
    model: AdvertiserDashboardUpdateModel
  ): Promise<AdvertiserDashboardResponseDto> => {
    try {
      const advertiserDashboard =
        await this._AdvertiserDashboardRepository.findOne({
          where: {
            id: id,
          },
        });
      if (!AdvertiserDashboard) {
        ErrorHandler.throwNotFoundError("AdvertiserDashboard not found!");
      }
     
      if (model.TotalAds != null) {
        advertiserDashboard.TotalAds = model.TotalAds;
      }
      if (model.TotalViews != null) {
        advertiserDashboard.TotalViews = model.TotalViews;
      }
      if (model.TotalFollowups != null) {
        advertiserDashboard.TotalFollowups = model.TotalFollowups;
      }
      if (model.TotalClicks != null) {
        advertiserDashboard.TotalClicks = model.TotalClicks;
      }
      var record = await this._AdvertiserDashboardRepository.save(
        advertiserDashboard
      );
      return AdvertiserDashboardMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //   const response = await this._AdvertiseRepository.findUnique({
  //     where: {
  //       id: id,
  //       DeletedAt: null,
  //     },
  //   });
  //   return AdvertiseMapper.toDto(response);
  // };
  delete = async (id: string) => {
    try {
      var record = await this._AdvertiserDashboardRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._AdvertiserDashboardRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  private async getUser(userId: uuid) {
    const user = await this._UserRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      ErrorHandler.throwNotFoundError("user cannot be found");
    }
    return user;
  }

  private async getAdvertise(advertiseId: uuid) {
    const advertise = await this._AdvertiserDashboardRepository.findOne({
      where: {
        id: advertiseId,
      },
    });
    if (!advertise) {
      ErrorHandler.throwNotFoundError("advertise cannot be found");
    }
    return advertise;
  }
}
