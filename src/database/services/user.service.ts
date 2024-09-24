import { UserMapper } from "../mappers/user.mapper";
import {
  UserCreateModel,
  UserResponseDto,
  UserUpdateModel,
} from "../../domain.types/user.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { User } from "../models/user.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class UserService {
  _UserRepository: Repository<User> = Source.getRepository(User);

  allUsers = async () => {
    const response = await this._UserRepository.find();
    return UserMapper.toArrayDto(response);
  };

  create = async (model: UserCreateModel) => {
    const user = await this._UserRepository.create({
      Name: model.Name,
      Username: model.Username,
      Email: model.Email,
      Bio: model.Bio,
      ProfileImageId: model.ProfileImageId,
      Account: model.Account,
      Password: model.Password,
      Work: model.Work,
      Education: model.Education,
    });

    const response = await this._UserRepository.save(user);
    return response;
  };

  public update = async (
    id: uuid,
    model: UserUpdateModel
  ): Promise<UserResponseDto> => {
    try {
      const blog = await this._UserRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!blog) {
        ErrorHandler.throwNotFoundError("Users not found!");
      }

      if (model.Name != null) {
        blog.Name = model.Name;
      }
      if (model.Username != null) {
        blog.Username = model.Username;
      }
      if (model.Email != null) {
        blog.Email = model.Email;
      }
      if (model.Bio != null) {
        blog.Bio = model.Bio;
      }

      if (model.Account != null) {
        blog.Account = model.Account;
      }
      if (model.ProfileImageId != null) {
        blog.ProfileImageId = model.ProfileImageId;
      }
      if (model.Password != null) {
        blog.Password = model.Password;
      }

      if (model.Work != null) {
        blog.Work = model.Work;
      }

      if (model.Education != null) {
        blog.Password = model.Password;
      }
      var record = await this._UserRepository.save(blog);
      return UserMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //     const response = await this._UserRepository.findOne({
  //         where: {
  //             id: id,
  //         },
  //     });
  //     return UserMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._UserRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._UserRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
