import { ReviewsResponseDto } from "../../domain.types/reviews.domain.types";
import { Reviews } from "../models/reviews.model";

export class ReviewsMapper {
  static toDto = (record: Reviews): ReviewsResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: ReviewsResponseDto = {
      id: record.id,
      UserId: record.UserId,
      BlogId: record.BlogId,
      Status: record.Status,
      CreatedAt: record.CreatedAt,
      UpdatedAt: record.UpdatedAt,
    };
    return dto;
  };

  static toArrayDto(records: any[]): ReviewsResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => ReviewsMapper.toDto(record));
  }
}
