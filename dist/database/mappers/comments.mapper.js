"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsMapper = void 0;
class CommentsMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => CommentsMapper.toDto(record));
    }
}
exports.CommentsMapper = CommentsMapper;
CommentsMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        UserId: record.UserId,
        BlogId: record.BlogId,
        Comment: record.Comment,
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
//# sourceMappingURL=comments.mapper.js.map