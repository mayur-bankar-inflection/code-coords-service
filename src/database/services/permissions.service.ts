import { PermissionsMapper } from "../mappers/permissions.mapper";
import {
  PermissionsCreateModel,
  PermissionsResponseDto,
  PermissionsUpdateModel,
} from "../../domain.types/permissions.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { Permissions } from "../models/permissions.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class PermissionsService {
  _PermissionsRepository: Repository<Permissions> =
    Source.getRepository(Permissions);

  allPermissions = async () => {
    const response = await this._PermissionsRepository.find();
    return PermissionsMapper.toArrayDto(response);
  };

  create = async (model: PermissionsCreateModel) => {
    const Permissions = await this._PermissionsRepository.create({
      Name: model.Name,
      Description: model.Description,
    });

    const response = await this._PermissionsRepository.save(Permissions);
    return response;
  };

  public update = async (
    id: uuid,
    model: PermissionsUpdateModel
  ): Promise<PermissionsResponseDto> => {
    try {
      const Permissions = await this._PermissionsRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!Permissions) {
        ErrorHandler.throwNotFoundError("Permissionss not found!");
      }

      if (model.Name != null) {
        Permissions.Name = model.Name;
      }
      if (model.Description != null) {
        Permissions.Description = model.Description;
      }

      var record = await this._PermissionsRepository.save(Permissions);
      return PermissionsMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //     const response = await this._PermissionsRepository.findOne({
  //         where: {
  //             id: id,
  //         },
  //     });
  //     return PermissionsMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._PermissionsRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._PermissionsRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
