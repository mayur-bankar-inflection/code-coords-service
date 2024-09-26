import { RolePermissionsMapper } from "../mappers/role.permissions.mapper";
import {
  RolePermissionsCreateModel,
  RolePermissionsResponseDto,
  RolePermissionsUpdateModel,
} from "../../domain.types/role.permissions.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { RolePermissions } from "../models/role.permissions.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class RolePermissionsService {
  _RolePermissionsRepository: Repository<RolePermissions> =
    Source.getRepository(RolePermissions);

  allRolePermissions = async () => {
    const response = await this._RolePermissionsRepository.find();
    return RolePermissionsMapper.toArrayDto(response);
  };

  create = async (model: RolePermissionsCreateModel) => {
    const RolePermissions = await this._RolePermissionsRepository.create({
      UserId: model.UserId,
      PermissionId: model.PermissionId,
    });

    const response = await this._RolePermissionsRepository.save(
      RolePermissions
    );
    return response;
  };

  public update = async (
    id: uuid,
    model: RolePermissionsUpdateModel
  ): Promise<RolePermissionsResponseDto> => {
    try {
      const RolePermissions = await this._RolePermissionsRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!RolePermissions) {
        ErrorHandler.throwNotFoundError("RolePermissionss not found!");
      }

      if (model.UserId != null) {
        RolePermissions.UserId = model.UserId;
      }
      if (model.PermissionId != null) {
        RolePermissions.PermissionId = model.PermissionId;
      }

      var record = await this._RolePermissionsRepository.save(RolePermissions);
      return RolePermissionsMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //     const response = await this._RolePermissionsRepository.findOne({
  //         where: {
  //             id: id,
  //         },
  //     });
  //     return RolePermissionsMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._RolePermissionsRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._RolePermissionsRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
