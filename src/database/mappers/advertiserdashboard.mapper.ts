import { AdvertiserDashboardResponseDto } from "../../domain.types/advertiserdashboard.domain.types";
import { AdvertiserDashboard } from "../models/advertiserdashboard.model";

export class AdvertiserDashboardMapper {
  static toDto = (
    record: AdvertiserDashboard
  ): AdvertiserDashboardResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: AdvertiserDashboardResponseDto = {
      id: record.id,
      TotalAds: record.TotalAds,
      TotalViews: record.TotalViews,
      TotalFollowups: record.TotalFollowups,
      TotalClicks: record.TotalClicks,
      User: record.user ? {
        id  : record.user.id,
        Name: record.user.Name,
    } : null,
      CreatedAt: record.CreatedAt,
      UpdatedAt: record.UpdatedAt,
    };
    return dto;
  };

  static toArrayDto(records: any[]): AdvertiserDashboardResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => AdvertiserDashboardMapper.toDto(record));
  }
}
3;
