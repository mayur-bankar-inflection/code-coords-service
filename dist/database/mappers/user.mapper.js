"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => UserMapper.toDto(record));
    }
}
exports.UserMapper = UserMapper;
UserMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
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
//# sourceMappingURL=user.mapper.js.map