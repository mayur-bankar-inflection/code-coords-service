import { uuid } from "./miscellaneous/system.types";

export interface DraftCreateModel {
  BlogId: string;
  UserId: string;
}

export interface DraftUpdateModel {
  BlogId: string;
  UserId: string;
}

export interface DraftResponseDto {
  id: string;
  BlogId: string;
  UserId: string;
  User: {
    id: uuid;
    Name: string;
  };
  CreatedAt: Date;
  UpdatedAt: Date;
}
