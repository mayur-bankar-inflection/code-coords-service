import { AdvertiseMapper } from "../mappers/advertise.mapper";
import {
  AdvertiseCreateModel,
  AdvertiseResponseDto,
  AdvertiseUpdateModel,
} from "../../domain.types/advertise.domain.types";
import { Repository } from "typeorm";
import { ErrorHandler } from "../../common/error.handler";
import { Advertise } from "../models/advertise.model";
import { Source } from "../database.connector";
import { AdvertiserDashboard } from "../models/advertiserdashboard.model";

////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class AdvertiseService {
  _AdvertiseRepository: Repository<Advertise> = Source.getRepository(Advertise);
  _AdvertiserDashboardRepository: Repository<AdvertiserDashboard> =
    Source.getRepository(AdvertiserDashboard);

  allAdvertisers = async () => {
    const response = await this._AdvertiseRepository.find();
    return AdvertiseMapper.toArrayDto(response);
  };

  create = async (model: AdvertiseCreateModel) => {
    const advertiser = await this.getAdvertiser(model.AdvertiserId);

    const advertise_res = await this._AdvertiseRepository.create({
      Title: model.Title,
      advertiserDashboard: advertiser,
      Description: model.Description,
      ImageSrc: model.ImageSrc,
    });
    const response = await this._AdvertiseRepository.save(advertise_res);
    return AdvertiseMapper.toDto(response);
  };

  public update = async (
    id: uuid,
    model: AdvertiseUpdateModel
  ): Promise<AdvertiseResponseDto> => {
    try {
      const advertise = await this._AdvertiseRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!advertise) {
        ErrorHandler.throwNotFoundError("Blogs not found!");
      }
      if (model.Title != null) {
        advertise.Title = model.Title;
      }

      if (model.Description != null) {
        advertise.Description = model.Description;
      }
      if (model.ImageSrc != null) {
        advertise.ImageSrc = model.ImageSrc;
      }
    

      var record = await this._AdvertiseRepository.save(advertise);
      return AdvertiseMapper.toDto(record);
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
      var record = await this._AdvertiseRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._AdvertiseRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  private async getAdvertiser(advertiserId: uuid) {
    const advertiser = await this._AdvertiserDashboardRepository.findOne({
      where: {
        id: advertiserId,
      },
    });
    if (!advertiser) {
      ErrorHandler.throwNotFoundError("advertiser dashboard cannot be found");
    }
    return advertiser;
  }
}
