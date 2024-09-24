"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpMapper = void 0;
class SignUpMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => SignUpMapper.toDto(record));
    }
}
exports.SignUpMapper = SignUpMapper;
SignUpMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
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
//# sourceMappingURL=signup.mapper.js.map