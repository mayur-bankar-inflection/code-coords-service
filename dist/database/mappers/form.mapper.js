"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormMapper = void 0;
class FormMapper {
    static toArrayDto(records) {
        if (records === null) {
            return [];
        }
        return records.map((record) => FormMapper.toDto(record));
    }
}
exports.FormMapper = FormMapper;
FormMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.string,
        FirstName: record.string,
        Age: record.number,
        LastName: record.string,
        CreatedAt: record.Date,
    };
    return dto;
};
//# sourceMappingURL=form.mapper.js.map