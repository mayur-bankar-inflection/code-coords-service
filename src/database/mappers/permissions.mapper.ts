import { PermissionsResponseDto } from "../../domain.types/permissions.domain.types";
import { Permissions } from "../models/permissions.model";

export class PermissionsMapper {
  static toDto = (record: Permissions): PermissionsResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: PermissionsResponseDto = {
      id: record.id,
      Name: record.Name,
      Description: record.Description,
      CreatedAt: record.CreatedAt,
      UpdatedAt: record.UpdatedAt,
    };
    return dto;
  };

  static toArrayDto(records: any[]): PermissionsResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => PermissionsMapper.toDto(record));
  }
}
