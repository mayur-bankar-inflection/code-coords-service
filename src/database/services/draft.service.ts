import { DraftMapper } from "../mappers/draft.mapper";
import {
  DraftCreateModel,
  DraftResponseDto,
  DraftUpdateModel,
} from "../../domain.types/draft.domain.types";
import { Repository } from "typeorm";
import { Draft } from "../models/draft.model";
import { Source } from "../database.connector";
import { ErrorHandler } from "../../common/error.handler";
import { User } from "../models/user.model";

////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class DraftService {
  _DraftRepository: Repository<Draft> = Source.getRepository(Draft);
  _UserRepository: Repository<User> = Source.getRepository(User);


  allDrafts = async () => {
    const response = await this._DraftRepository.find({ withDeleted: false });
    return DraftMapper.toArrayDto(response);
  };

  create = async (model: DraftCreateModel) => {
    const user = await this.getUser(model.UserId);

    const Draft = this._DraftRepository.create({
      User:user,
      BlogId: model.BlogId,
    });

    // Save the Draft to the database
    const response = await this._DraftRepository.save(Draft);

    return DraftMapper.toDto(response);
  };

  public update = async (
    id: uuid,
    model: DraftUpdateModel
  ): Promise<DraftResponseDto> => {
    try {
      const Draft = await this._DraftRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!Draft) {
        ErrorHandler.throwNotFoundError("Drafts not found!");
      }

      if (model.BlogId != null) {
        Draft.BlogId = model.BlogId;
      }

      var record = await this._DraftRepository.save(Draft);
      return DraftMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //   const response = await this._DraftRepository.findUnique({
  //     where: {
  //       id: id,
  //       DeletedAt: null,
  //     },
  //   });
  //   return DraftMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._DraftRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._DraftRepository.softRemove(record);
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
