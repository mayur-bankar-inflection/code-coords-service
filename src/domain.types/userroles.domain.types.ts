export interface UserRolesCreateModel {
  UserId: string;
  RoleId: string;
}

export interface UserRolesUpdateModel {
  UserId?: string;
  RoleId?: string;
}

export interface UserRolesResponseDto {
  id: string;
  UserId: string;
  RoleId: string;
}
