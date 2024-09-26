"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionsMapper = void 0;
class RolePermissionsMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => RolePermissionsMapper.toDto(record));
    }
}
exports.RolePermissionsMapper = RolePermissionsMapper;
RolePermissionsMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        UserId: record.UserId,
        PermissionId: record.PermissionId,
        GrantedAt: record.GrantedAt,
    };
    return dto;
};
//# sourceMappingURL=rolepermissions.mapper.js.map