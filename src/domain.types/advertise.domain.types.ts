import { uuid } from "./miscellaneous/system.types";

export interface AdvertiseCreateModel {
  AdvertiserId:string
  Title: string;
  Description: string;
  ImageSrc: string;
}
export interface AdvertiseUpdateModel {
  AdvertiserId?:string;
  Title?: string;
  Description?: string;
  ImageSrc?: string;
}
export interface AdvertiseResponseDto {
  id: string;
  Title: string;
  Description: string;
  ImageSrc: string;
  Advertiser: {
    id  : uuid;
}
  CreatedAt: Date;
}
