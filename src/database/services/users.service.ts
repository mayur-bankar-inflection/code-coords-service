import { UsersMapper } from "../mappers/users.mapper";
import {
  UsersCreateModel,
  UsersResponseDto,
  UsersUpdateModel,
} from "../../domain.types/users.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { Users } from "../models/users.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class UsersService {
  _UsersRepository: Repository<Users> = Source.getRepository(Users);

  allUsers = async () => {
    const response = await this._UsersRepository.find();
    return UsersMapper.toArrayDto(response);
  };

  create = async (model: UsersCreateModel) => {
    const Users = await this._UsersRepository.create({
      Email: model.Email,
      Phone: model.Phone,
      PasswordHash: model.PasswordHash,
      IsActive: model.IsActive,
      IsEmailVerified: model.IsEmailVerified,
      IsPhoneVerified: model.IsPhoneVerified,
    });

    const response = await this._UsersRepository.save(Users);
    return response;
  };

  public update = async (
    id: uuid,
    model: UsersUpdateModel
  ): Promise<UsersResponseDto> => {
    try {
      const users = await this._UsersRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!users) {
        ErrorHandler.throwNotFoundError("Userss not found!");
      }

      if (model.Email != null) {
        users.Email = model.Email;
      }
      if (model.Phone != null) {
        users.Phone = model.Phone;
      }
      if (model.PasswordHash != null) {
        users.PasswordHash = model.PasswordHash;

        if (model.IsActive != null) {
          users.IsActive = model.IsActive;
        }

        if (model.IsEmailVerified != null) {
          users.IsEmailVerified = model.IsEmailVerified;
        }
        if (model.IsPhoneVerified != null) {
          users.IsPhoneVerified = model.IsPhoneVerified;
        }

        var record = await this._UsersRepository.save(users);
        return UsersMapper.toDto(record);
      }
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //     const response = await this._UsersRepository.findOne({
  //         where: {
  //             id: id,
  //         },
  //     });
  //     return UsersMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._UsersRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._UsersRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
