import { BlogMapper } from "../mappers/blog.mapper";
import {
  BlogCreateModel,
  BlogResponseDto,
  BlogUpdateModel,
} from "../../domain.types/blog.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { Blog } from "../models/blog.model";
import { ErrorHandler } from "../../common/error.handler";
import { User } from "../models/user.model";

////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class BlogService {
  _BlogRepository: Repository<Blog> = Source.getRepository(Blog);
  _UserRepository: Repository<User> = Source.getRepository(User);

  allBlogs = async () => {
    const response = await this._BlogRepository.find({ withDeleted: false });
    return BlogMapper.toArrayDto(response);
  };

  create = async (model: BlogCreateModel) => {
    const user = await this.getUser(model.UserId);
    const blog = this._BlogRepository.create({
      user:user,
      Title: model.Title,
      BlogId: model.BlogId,
      Tags: model.Tags,
      Published: model.Published,
      CommentId: model.CommentId,
      Save: model.Save,
      Likes: model.Likes,
    });

    // Save the blog to the database
    const response = await this._BlogRepository.save(blog);

    return BlogMapper.toDto(response);
  };

  public update = async (
    id: uuid,
    model: BlogUpdateModel
  ): Promise<BlogResponseDto> => {
    try {
      const blog = await this._BlogRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!blog) {
        ErrorHandler.throwNotFoundError("Blogs not found!");
      }

      if (model.Title != null) {
        blog.Title = model.Title;
      }
      if (model.BlogId != null) {
        blog.BlogId = model.BlogId;
      }
      if (model.Tags != null) {
        blog.Tags = model.Tags;
      }
      if (model.Published != null) {
        blog.Published = model.Published;
      }

      if (model.Likes != null) {
        blog.Likes = model.Likes;
      }
      if (model.CommentId != null) {
        blog.CommentId = model.CommentId;
      }
      if (model.Save != null) {
        blog.Save = model.Save;
      }
      var record = await this._BlogRepository.save(blog);
      return BlogMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //   const response = await this._BlogRepository.findOne({
  //     where: {
  //       id: id,
  //       DeletedAt: null,
  //     },
  //   });
  //   return BlogMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._BlogRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._BlogRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  private async getUser(userId: uuid) {
    const user = await this._UserRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      ErrorHandler.throwNotFoundError("user cannot be found");
    }
    return user;
  }
}
