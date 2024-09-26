import { ProviderEnum } from "../database/models/social.auth.model";

export interface SocialAuthCreateModel {
  UserId:string;
  Provider: ProviderEnum;
  ProviderUserId: string;
  AccessToken: string;
  RefreshToken: string;
}

export interface SocialAuthUpdateModel {
  UserId?:string;
  Provider?: ProviderEnum;
  ProviderUserId?: string;
  AccessToken?: string;
  RefreshToken?: string;
}

export interface SocialAuthResponseDto {
  id: string;
  UserId: string;
  Provider: ProviderEnum;
  ProviderUserId: string;
  AccessToken: string;
  RefreshToken: string;
}
