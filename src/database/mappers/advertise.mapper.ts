import { AdvertiseResponseDto } from "../../domain.types/advertise.domain.types";

export class AdvertiseMapper {
  static toDto = (record: any): AdvertiseResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: AdvertiseResponseDto = {
      id: record.id,
      Title: record.Title,
      Description: record.Description,
      ImageSrc: record.ImageSrc,
      Advertiser: record.advertise ? {
        id  : record.advertise.id,
    } : null,
      CreatedAt: record.CreatedAt,
    };
    return dto;
  };

  static toArrayDto(records: any[]): AdvertiseResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => AdvertiseMapper.toDto(record));
  }
}
