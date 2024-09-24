import { SignUpMapper } from "../mappers/signup.mapper";
import {
  SignUpCreateModel,
  SignUpResponseDto,
  SignUpUpdateModel,
} from "../../domain.types/signup.domain.types";
import { Source } from "../database.connector";
import { Repository } from "typeorm";
import { SignUp } from "../models/signup.model";
import { ErrorHandler } from "../../common/error.handler";

/////////////////////////////////////////////////////////////////////////////////
type uuid = string | undefined | null;

export class SignUpService {
  _SignUpRepository: Repository<SignUp> = Source.getRepository(SignUp);

  allSignUp = async () => {
    const response = await this._SignUpRepository.find();
    return SignUpMapper.toArrayDto(response);
  };

  create = async (model: SignUpCreateModel) => {
    const user = await this._SignUpRepository.create({
      UserName: model.UserName,
      Password: model.Password,
      Email: model.Email,
      UserRole: model.UserRole,
    });

    const response = await this._SignUpRepository.save(user);
    return response;
  };

  public update = async (
    id: uuid,
    model: SignUpUpdateModel
  ): Promise<SignUpResponseDto> => {
    try {
      const signup = await this._SignUpRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!signup) {
        ErrorHandler.throwNotFoundError("Users not found!");
      }

      if (model.SignUpId != null) {
        signup.SignUpId = model.SignUpId;
      }
      if (model.UserId != null) {
        signup.UserId = model.UserId;
      }
      if (model.UserName != null) {
        signup.UserName = model.UserName;
      }
      if (model.Password != null) {
        signup.Password = model.Password;
      }

      if (model.Email != null) {
        signup.Email = model.Email;
      }
      if (model.UserRole != null) {
        signup.UserRole = model.UserRole;
      }

      var record = await this._SignUpRepository.save(signup);
      return SignUpMapper.toDto(record);
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
      var record = await this._SignUpRepository.findOne({
        where: {
          id: id,
        },
      });
      var result = await this._SignUpRepository.softRemove(record);
      return result != null;
    } catch (error) {
      ErrorHandler.throwInternalServerError(error.message, 500);
    }
  };
}
