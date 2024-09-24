import { CommentsMapper } from "../mappers/comments.mapper";
import {
  CommentsCreateModel,
  CommentsResponseDto,
  CommentsUpdateModel,
} from "../../domain.types/comments.domain.types";
import { Repository } from "typeorm";
import { Source } from "../database.connector";
import { Comments } from "../models/comments.model";
import { ErrorHandler } from "../../common/error.handler";
import { User } from "../models/user.model";

////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class CommentsService {
  _CommentsRepository: Repository<Comments> = Source.getRepository(Comments);
  _UserRepository: Repository<User> = Source.getRepository(User);

  allCommentss = async () => {
    const response = await this._CommentsRepository.find({
      withDeleted: false,
    });
    return CommentsMapper.toArrayDto(response);
  };

  create = async (model: CommentsCreateModel) => {
    const user = await this.getUser(model.UserId);
    const Comments = this._CommentsRepository.create({
      User:user,
      BlogId: model.BlogId,
      Comment: model.Comment,
    });

    // Save the Comments to the database
    const response = await this._CommentsRepository.save(Comments);

    return CommentsMapper.toDto(response);
  };

  public update = async (
    id: uuid,
    model: CommentsUpdateModel
  ): Promise<CommentsResponseDto> => {
    try {
      const Comments = await this._CommentsRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!Comments) {
        ErrorHandler.throwNotFoundError("Commentss not found!");
      }

      if (model.BlogId != null) {
        Comments.BlogId = model.BlogId;
      }
      if (model.Comment != null) {
        Comments.Comment = model.Comment;
      }

      var record = await this._CommentsRepository.save(Comments);
      return CommentsMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //   const response = await this._CommentsRepository.findUnique({
  //     where: {
  //       id: id,
  //       DeletedAt: null,
  //     },
  //   });
  //   return CommentsMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._CommentsRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._CommentsRepository.softRemove(record);
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
