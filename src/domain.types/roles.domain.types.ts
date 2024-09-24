export interface RolesCreateModel {
  RoleName: string;
  Description: string;
}

export interface RolesUpdateModel {
  RoleName?: string;
  Description?: string;
}

export interface RolesResponseDto {
  id: string;
  RoleName: string;
  Description: string;
}
