import {
    uuid
} from "./miscellaneous/system.types";


/////////////////////////////////////////////////////////////////////////////////

export interface BlogCreateModel {
    UserId:string;
    Title: string;
    BlogId: string;
    Tags: string;
    Published: boolean;
    Likes: number;
    CommentId: string;
    Save:number;

}

export interface BlogUpdateModel {
    UserId?:string
    Title?: string;
    BlogId?: string;
    Tags?: string;
    Published?: boolean;
    Likes?: number;
    CommentId?: string;
    Save?:number;
} 

export interface BlogResponseDto {
    id: string;
    Title: string;
    BlogId: string;
    Tags: string;
    Published: boolean;
    Likes: number;
    CommentId: string;
    Save:number;
    User: {
        id  : uuid;
        Name: string;
    }
    CreatedAt  : Date;
    UpdatedAt  : Date;
}




