"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertiseMapper = void 0;
class AdvertiseMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => AdvertiseMapper.toDto(record));
    }
}
exports.AdvertiseMapper = AdvertiseMapper;
AdvertiseMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        Title: record.Title,
        Description: record.Description,
        ImageSrc: record.ImageSrc,
        Advertiser: record.advertise ? {
            id: record.advertise.id,
        } : null,
        CreatedAt: record.CreatedAt,
    };
    return dto;
};
//# sourceMappingURL=advertise.mapper.js.map