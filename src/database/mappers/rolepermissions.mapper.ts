import { RolePermissionsResponseDto } from "../../domain.types/rolepermissions.domain.types";
import { RolePermissions } from "../models/rolepermissions.model";

export class RolePermissionsMapper {
  static toDto = (record: RolePermissions): RolePermissionsResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: RolePermissionsResponseDto = {
      id: record.id,
      UserId: record.UserId,
      PermissionId: record.PermissionId,
      GrantedAt: record.GrantedAt,
    };
    return dto;
  };

  static toArrayDto(records: any[]): RolePermissionsResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => RolePermissionsMapper.toDto(record));
  }
}
