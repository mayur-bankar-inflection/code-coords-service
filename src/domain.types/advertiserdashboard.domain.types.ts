import { uuid } from "./miscellaneous/system.types";

export interface AdvertiserDashboardCreateModel {
  UserId: string;
  TotalAds: number;
  TotalViews: number;
  TotalFollowups: number;
  TotalClicks: number;
}

export interface AdvertiserDashboardUpdateModel {
  AdvertiseId?: string;
  UserId?: string;
  TotalAds?: number;
  TotalViews?: number;
  TotalFollowups?: number;
  TotalClicks?: number;
}

export interface AdvertiserDashboardResponseDto {
  id: string;
  TotalAds: number;
  TotalViews: number;
  TotalFollowups: number;
  TotalClicks: number;
  User: {
    id: uuid;
    Name: string;
  };
  CreatedAt: Date;
  UpdatedAt: Date;
}
