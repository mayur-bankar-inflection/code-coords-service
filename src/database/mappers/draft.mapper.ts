import { DraftResponseDto } from "../../domain.types/draft.domain.types";

export class DraftMapper {
  static toDto = (record: any): DraftResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: DraftResponseDto = {
      id: record.id,
      BlogId: record.BlogId,
      UserId: record.UserId,
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

  static toArrayDto(records: any[]): DraftResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => DraftMapper.toDto(record));
  }
}
