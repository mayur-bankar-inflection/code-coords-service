"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMapper = void 0;
class UsersMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => UsersMapper.toDto(record));
    }
}
exports.UsersMapper = UsersMapper;
UsersMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
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
//# sourceMappingURL=users.mapper.js.map