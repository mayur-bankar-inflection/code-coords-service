import { uuid } from "./miscellaneous/system.types";

export interface SignUpCreateModel {
  SignUpId: string;
  UserId: string;
  UserName: string;
  Password: string;
  Email: string;
  UserRole: string;
}
export interface SignUpUpdateModel {
  SignUpId?: string;
  UserId?: string;
  UserName?: string;
  Password: string;
  Email?: string;
  UserRole?: string;
}
export interface SignUpResponseDto {
  id: string;
  SignUpId: string;
  UserId: string;
  UserName: string;
  Password: string;
  Email: string;
  UserRole: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}
