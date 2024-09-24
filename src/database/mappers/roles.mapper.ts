import { RolesResponseDto } from "../../domain.types/roles.domain.types";
import { Roles } from "../models/roles.model";

export class RolesMapper {
  static toDto = (record: Roles): RolesResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: RolesResponseDto = {
      id: record.id,
      RoleName: record.RoleName,
      Description: record.Description,
    };
    return dto;
  };

  static toArrayDto(records: any[]): RolesResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => RolesMapper.toDto(record));
  }
}
