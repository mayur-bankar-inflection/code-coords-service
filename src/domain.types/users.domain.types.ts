export interface UsersCreateModel {
  Email: string;
  Phone: string;
  PasswordHash: string;
  IsActive: boolean;
  IsEmailVerified: boolean;
  IsPhoneVerified: boolean;
}

export interface UsersUpdateModel {
  Email?: string;
  Phone?: string;
  PasswordHash?: string;
  IsActive?: boolean;
  IsEmailVerified?: boolean;
  IsPhoneVerified?: boolean;
}

export interface UsersResponseDto {
  id: string;
  Email: string;
  Phone: string;
  PasswordHash: string;
  IsActive: boolean;
  IsEmailVerified: boolean;
  IsPhoneVerified: boolean;
}
