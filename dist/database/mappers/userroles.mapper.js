"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolesMapper = void 0;
class UserRolesMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => UserRolesMapper.toDto(record));
    }
}
exports.UserRolesMapper = UserRolesMapper;
UserRolesMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        UserId: record.UserId,
        RoleId: record.RoleId,
    };
    return dto;
};
//# sourceMappingURL=userroles.mapper.js.map