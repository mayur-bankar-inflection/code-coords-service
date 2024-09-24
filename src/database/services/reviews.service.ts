import { ReviewsMapper } from "../mappers/reviews.mapper";
import {
  ReviewsCreateModel,
  ReviewsResponseDto,
  ReviewsUpdateModel,
} from "../../domain.types/reviews.domain.types";
import { Repository } from "typeorm";
import { ErrorHandler } from "../../common/error.handler";
import { Reviews } from "../models/reviews.model";
import { Source } from "../database.connector";

////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class ReviewsService {
  _ReviewsRepository: Repository<Reviews> = Source.getRepository(Reviews);

  allReviews = async () => {
    const response = await this._ReviewsRepository.find();
    return ReviewsMapper.toArrayDto(response);
  };

  create = async (model: ReviewsCreateModel) => {
    const user = await this.getUser(model.UserId);
    const reviews = await this._ReviewsRepository.create({
      User:user,
      BlogId: model.BlogId,
      UserId: model.UserId,
      Status: model.Status,
    });
    const response = await this._ReviewsRepository.save(reviews);
    return ReviewsMapper.toDto(response);
  };

  public update = async (
    id: uuid,
    model: ReviewsUpdateModel
  ): Promise<ReviewsResponseDto> => {
    try {
      const reviews = await this._ReviewsRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!reviews) {
        ErrorHandler.throwNotFoundError("reviews not found!");
      }
      if (model.BlogId != null) {
        reviews.BlogId = model.BlogId;
      }

      if (model.UserId != null) {
        reviews.UserId = model.UserId;
      }

      if (model.Status != null) {
        reviews.Status = model.Status;
      }

      var record = await this._ReviewsRepository.save(reviews);
      return ReviewsMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //   const response = await this._AdvertiseRepository.findUnique({
  //     where: {
  //       id: id,
  //       DeletedAt: null,
  //     },
  //   });
  //   return AdvertiseMapper.toDto(response);
  // };
  delete = async (id: string) => {
    try {
      var record = await this._ReviewsRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._ReviewsRepository.remove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  private async getUser(userId: uuid) {
    const user = await this._ReviewsRepository.findOne({
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
