"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftMapper = void 0;
class DraftMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => DraftMapper.toDto(record));
    }
}
exports.DraftMapper = DraftMapper;
DraftMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        BlogId: record.BlogId,
        UserId: record.UserId,
        User: record.user
            ? {
                id: record.user.id,
                Name: record.user.Name,
            }
            : null,
        CreatedAt: record.CreatedAt,
        UpdatedAt: record.UpdatedAt,
    };
    return dto;
};
//# sourceMappingURL=draft.mapper.js.map