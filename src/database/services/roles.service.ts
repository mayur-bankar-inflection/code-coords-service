import { RolesMapper } from "../mappers/roles.mapper";
import {
  RolesCreateModel,
  RolesResponseDto,
  RolesUpdateModel,
} from "../../domain.types/roles.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { Roles } from "../models/roles.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class RolesService {
  _RolesRepository: Repository<Roles> = Source.getRepository(Roles);

  allRoles = async () => {
    const response = await this._RolesRepository.find();
    return RolesMapper.toArrayDto(response);
  };

  create = async (model: RolesCreateModel) => {
    const Roles = await this._RolesRepository.create({
      RoleName: model.RoleName,
      Description: model.Description,
    });

    const response = await this._RolesRepository.save(Roles);
    return response;
  };

  public update = async (
    id: uuid,
    model: RolesUpdateModel
  ): Promise<RolesResponseDto> => {
    try {
      const Roles = await this._RolesRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!Roles) {
        ErrorHandler.throwNotFoundError("Roless not found!");
      }

      if (model.RoleName != null) {
        Roles.RoleName = model.RoleName;
      }
      if (model.Description != null) {
        Roles.Description = model.Description;
      }

      var record = await this._RolesRepository.save(Roles);
      return RolesMapper.toDto(record);
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };

  // getById = async (id: string) => {
  //     const response = await this._RolesRepository.findOne({
  //         where: {
  //             id: id,
  //         },
  //     });
  //     return RolesMapper.toDto(response);
  // };

  delete = async (id: string) => {
    try {
      var record = await this._RolesRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._RolesRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
