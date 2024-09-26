import { UserRolesMapper } from "../mappers/user.roles.mapper";
import {
  UserRolesCreateModel,
  UserRolesResponseDto,
  UserRolesUpdateModel,
} from "../../domain.types/user.roles.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { UserRoles } from "../models/user.roles.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class UserRolesService {
  _UserRolesRepository: Repository<UserRoles> = Source.getRepository(UserRoles);

  allUserRoles = async () => {
    const response = await this._UserRolesRepository.find();
    return UserRolesMapper.toArrayDto(response);
  };

  create = async (model: UserRolesCreateModel) => {
    const UserRoles = await this._UserRolesRepository.create({
      UserId: model.UserId,
      RoleId: model.RoleId,
    });

    const response = await this._UserRolesRepository.save(UserRoles);
    return response;
  };

  public update = async (
    id: uuid,
    model: UserRolesUpdateModel
  ): Promise<UserRolesResponseDto> => {
    try {
      const UserRoles = await this._UserRolesRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!UserRoles) {
        ErrorHUserIdhrowNotFoundError("UserRoless not found!");
      }

      if (model.UserId != null) {
        UserRoles.UserId = model.UserId;
      }
      if (model.RoleId != null) {
        UserRoles.RoleId = model.RoleId;
      }

      var record = await this._UserRolesRepository.save(UserRoles);
      return UserRolesMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //     const response = await this._UserRolesRepository.findOne({
  //         where: {
  //             id: id,
  //         },
  //     });
  //     return UserRolesMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._UserRolesRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._UserRolesRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
function ErrorHUserIdhrowNotFoundError(arg0: string) {
  throw new Error("Function not implemented.");
}

