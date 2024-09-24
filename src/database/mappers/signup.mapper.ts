import { SignUpResponseDto } from "../../domain.types/signup.domain.types";

export class SignUpMapper {
  static toDto = (record: any): SignUpResponseDto => {
    if (record === null) {
      return null;
    }

    const dto: SignUpResponseDto = {
      id: record.id,
      SignUpId: record.SignUpId,
      UserId: record.UserId,
      UserName: record.UserName,
      Password: record.Password,
      Email: record.Email,
      UserRole: record.UserRole,
      CreatedAt: record.CreatedAt,
      UpdatedAt: record.UpdatedAt,
    };
    return dto;
  };

  static toArrayDto(records: any[]): SignUpResponseDto[] {
    if (records === null) {
      return [];
    }
    return records.map((record) => SignUpMapper.toDto(record));
  }
}
