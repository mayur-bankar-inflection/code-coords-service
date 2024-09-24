import { CommentsResponseDto } from "../../domain.types/comments.domain.types";

export class CommentsMapper {
  static toDto = (record: any): CommentsResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: CommentsResponseDto = {
      id: record.id,
      UserId: record.UserId,
      BlogId: record.BlogId,
      Comment: record.Comment,
      User: record.user
        ? {
            id: record.user.id,
            Name: record.user.Name,
          }
        : null,
      CreatedAt: record.CreatedAt,
      UpdatedAt: record.UpdatedAt,
    };
    return dto;
  };

  static toArrayDto(records: any[]): CommentsResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => CommentsMapper.toDto(record));
  }
}
