"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsMapper = void 0;
class PermissionsMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => PermissionsMapper.toDto(record));
    }
}
exports.PermissionsMapper = PermissionsMapper;
PermissionsMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        Name: record.Name,
        Description: record.Description,
        CreatedAt: record.CreatedAt,
        UpdatedAt: record.UpdatedAt,
    };
    return dto;
};
//# sourceMappingURL=permissions.mapper.js.map