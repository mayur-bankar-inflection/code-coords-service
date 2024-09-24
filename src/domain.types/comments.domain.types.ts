import { uuid } from "./miscellaneous/system.types";

export interface CommentsCreateModel {
  UserId:string;
  BlogId: string;
  Comment: string;
}

export interface CommentsUpdateModel {
  UserId:string;
  BlogId: string;
  Comment: string;
}

export interface CommentsResponseDto {
  id: string;
  UserId:string;
  BlogId: string;
  Comment: string;
  User: {
    id  : uuid;
    Name: string;
}
  CreatedAt: Date;
  UpdatedAt: Date;
}
