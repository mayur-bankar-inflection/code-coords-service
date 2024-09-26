export interface PermissionsCreateModel {
  Name: string;
  Description: string;
}

export interface PermissionsUpdateModel {
  Name?: string;
  Description?: string;
}

export interface PermissionsResponseDto {
  id:string;
  Name: string;
  Description: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}
