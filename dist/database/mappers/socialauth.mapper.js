"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAuthMapper = void 0;
class SocialAuthMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => SocialAuthMapper.toDto(record));
    }
}
exports.SocialAuthMapper = SocialAuthMapper;
SocialAuthMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        UserId: record.UserId,
        Provider: record.Provider,
        ProviderUserId: record.ProviderUserId,
        AccessToken: record.AccessToken,
        RefreshToken: record.RefreshToken,
    };
    return dto;
};
//# sourceMappingURL=socialauth.mapper.js.map