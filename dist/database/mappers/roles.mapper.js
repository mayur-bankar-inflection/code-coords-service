"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesMapper = void 0;
class RolesMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => RolesMapper.toDto(record));
    }
}
exports.RolesMapper = RolesMapper;
RolesMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        RoleName: record.RoleName,
        Description: record.Description,
    };
    return dto;
};
//# sourceMappingURL=roles.mapper.js.map