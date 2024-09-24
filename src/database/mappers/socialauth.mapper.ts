import { SocialAuthResponseDto } from "../../domain.types/socialauth.domain.types";
import { SocialAuth } from "../models/socialauth.model";

export class SocialAuthMapper {
  static toDto = (record: SocialAuth): SocialAuthResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: SocialAuthResponseDto = {
      id: record.id,
      UserId: record.UserId,
      Provider: record.Provider,
      ProviderUserId: record.ProviderUserId,
      AccessToken: record.AccessToken,
      RefreshToken: record.RefreshToken,
    };
    return dto;
  };

  static toArrayDto(records: any[]): SocialAuthResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => SocialAuthMapper.toDto(record));
  }
}
