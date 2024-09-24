export interface ReviewsCreateModel {
  BlogId: string;
  UserId: string;
  Status: boolean;
}

export interface ReviewsUpdateModel {
  BlogId?: string;
  UserId?: string;
  Status?: boolean;
}

export interface ReviewsResponseDto {
  id: string;
  BlogId: string;
  UserId: string;
  Status: boolean;
  CreatedAt: Date;
  UpdatedAt: Date;
}
