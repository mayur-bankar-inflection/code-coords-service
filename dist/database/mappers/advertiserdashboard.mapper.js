"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertiserDashboardMapper = void 0;
class AdvertiserDashboardMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => AdvertiserDashboardMapper.toDto(record));
    }
}
exports.AdvertiserDashboardMapper = AdvertiserDashboardMapper;
AdvertiserDashboardMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        TotalAds: record.TotalAds,
        TotalViews: record.TotalViews,
        TotalFollowups: record.TotalFollowups,
        TotalClicks: record.TotalClicks,
        User: record.user ? {
            id: record.user.id,
            Name: record.user.Name,
        } : null,
        CreatedAt: record.CreatedAt,
        UpdatedAt: record.UpdatedAt,
    };
    return dto;
};
3;
//# sourceMappingURL=advertiserdashboard.mapper.js.map