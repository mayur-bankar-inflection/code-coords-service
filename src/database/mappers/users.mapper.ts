import { UsersResponseDto } from "../../domain.types/users.domain.types";
import { Users } from "../models/users.model";

export class UsersMapper {
  static toDto = (record: Users): UsersResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: UsersResponseDto = {
      id: record.id,
      Email: record.Email,
      Phone: record.Phone,
      PasswordHash: record.PasswordHash,
      IsActive: record.IsActive,
      IsEmailVerified: record.IsEmailVerified,
      IsPhoneVerified: record.IsPhoneVerified,
    };
    return dto;
  };

  static toArrayDto(records: any[]): UsersResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => UsersMapper.toDto(record));
  }
}
