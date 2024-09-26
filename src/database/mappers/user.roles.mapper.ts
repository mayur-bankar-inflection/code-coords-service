import { UserRolesResponseDto } from "../../domain.types/user.roles.domain.types";
import { UserRoles } from "../models/user.roles.model";

export class UserRolesMapper {
  static toDto = (record: UserRoles): UserRolesResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: UserRolesResponseDto = {
      id: record.id,
      UserId: record.UserId,
      RoleId: record.RoleId,
    };
    return dto;
  };

  static toArrayDto(records: any[]): UserRolesResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => UserRolesMapper.toDto(record));
  }
}
