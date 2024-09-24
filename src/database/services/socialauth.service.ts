import { SocialAuthMapper } from "../mappers/socialauth.mapper";
import {
  SocialAuthCreateModel,
  SocialAuthResponseDto,
  SocialAuthUpdateModel,
} from "../../domain.types/socialauth.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { SocialAuth } from "../models/socialauth.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class SocialAuthService {
  _SocialAuthRepository: Repository<SocialAuth> =
    Source.getRepository(SocialAuth);

  allSocialAuth = async () => {
    const response = await this._SocialAuthRepository.find();
    return SocialAuthMapper.toArrayDto(response);
  };

  create = async (model: SocialAuthCreateModel) => {
    const SocialAuth = await this._SocialAuthRepository.create({
      Provider: model.Provider,
      ProviderUserId: model.ProviderUserId,
      AccessToken: model.AccessToken,
      RefreshToken: model.RefreshToken,
    });

    const response = await this._SocialAuthRepository.save(SocialAuth);
    return response;
  };

  public update = async (
    id: uuid,
    model: SocialAuthUpdateModel
  ): Promise<SocialAuthResponseDto> => {
    try {
      const SocialAuth = await this._SocialAuthRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!SocialAuth) {
        ErrorHandler.throwNotFoundError("SocialAuths not found!");
      }

      if (model.Provider != null) {
        SocialAuth.Provider = model.Provider;
      }
      if (model.ProviderUserId != null) {
        SocialAuth.ProviderUserId = model.ProviderUserId;
      }
      if (model.AccessToken != null) {
        SocialAuth.AccessToken = model.AccessToken;

        if (model.RefreshToken != null) {
          SocialAuth.RefreshToken = model.RefreshToken;
        }

        var record = await this._SocialAuthRepository.save(SocialAuth);
        return SocialAuthMapper.toDto(record);
      }
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //     const response = await this._SocialAuthRepository.findOne({
  //         where: {
  //             id: id,
  //         },
  //     });
  //     return SocialAuthMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._SocialAuthRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._SocialAuthRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
