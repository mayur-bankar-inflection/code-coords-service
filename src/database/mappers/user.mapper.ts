import { UserResponseDto } from "../../domain.types/user.domain.types";
import { User } from "../models/user.model";

export class UserMapper {
  static toDto = (record: User): UserResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: UserResponseDto = {
      id: record.id,
      Name: record.Name,
      Username: record.Username,
      Email: record.Email,
      Bio: record.Bio,
      Account: record.Account,
      ProfileImageId: record.ProfileImageId,
      Password: record.Password,
      Work: record.Work,
      Education: record.Education,
    };
    return dto;
  };

  static toArrayDto(records: any[]): UserResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => UserMapper.toDto(record));
  }
}
