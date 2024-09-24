"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsMapper = void 0;
class ReviewsMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => ReviewsMapper.toDto(record));
    }
}
exports.ReviewsMapper = ReviewsMapper;
ReviewsMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        UserId: record.UserId,
        BlogId: record.BlogId,
        Status: record.Status,
        CreatedAt: record.CreatedAt,
        UpdatedAt: record.UpdatedAt,
    };
    return dto;
};
//# sourceMappingURL=reviews.mapper.js.map