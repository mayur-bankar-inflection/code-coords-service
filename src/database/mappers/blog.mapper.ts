import { BlogResponseDto } from "../../domain.types/blog.domain.types";
import { Blog } from "../models/blog.model";

export class BlogMapper {
    static toDto = (record: Blog): BlogResponseDto => {
        if (record === null) {
            return null;
        }
        console.log(record);
        
        const dto: BlogResponseDto = {
            id: record.id,
            Title: record.Title,
            BlogId: record.BlogId,
            Tags: record.Tags,
            Published: record.Published,
            Likes: record.Likes,
            CommentId: record.CommentId,
            Save: record.Save,
            User: record.user ? {
                id  : record.user.id,
                Name: record.user.Name,
            } : null,
            CreatedAt   : record.CreatedAt,
            UpdatedAt   : record.UpdatedAt
        };
        return dto;
    };

    static toArrayDto(records: any[]): BlogResponseDto[] {
        if (records === null) {
            return [];
        }
        return records.map(record => BlogMapper.toDto(record));
    }

}
