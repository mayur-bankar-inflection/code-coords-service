"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogMapper = void 0;
class BlogMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map(record => BlogMapper.toDto(record));
    }
}
exports.BlogMapper = BlogMapper;
BlogMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    console.log(record);
    const dto = {
        id: record.id,
        Title: record.Title,
        BlogId: record.BlogId,
        Tags: record.Tags,
        Published: record.Published,
        Likes: record.Likes,
        CommentId: record.CommentId,
        Save: record.Save,
        User: record.user ? {
            id: record.user.id,
            Name: record.user.Name,
        } : null,
        CreatedAt: record.CreatedAt,
        UpdatedAt: record.UpdatedAt
    };
    return dto;
};
//# sourceMappingURL=blog.mapper.js.map