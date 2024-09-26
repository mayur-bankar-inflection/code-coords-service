export interface RolePermissionsCreateModel {
  UserId: string;
  RoleId: string;
  PermissionId: string;
}

export interface RolePermissionsUpdateModel {
  UserId?: string;
  RoleId?: string;
  PermissionId?: string;
}

export interface RolePermissionsResponseDto {
  id: string;
  UserId?: string;
  RoleId?: string;
  PermissionId?: string;
  GrantedAt: Date;
}
