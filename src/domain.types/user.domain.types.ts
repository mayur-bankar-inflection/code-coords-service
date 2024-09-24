

export interface UserCreateModel {
    Name: string;
    Username: string;
    Email: string;
    Bio: string;
    Account: string;
    ProfileImageId: string;
    Password: string;
    Work: string;
    Education: string;
}

export interface UserUpdateModel {
    Name?: string;
    Username?: string;
    Email?: string;
    Bio?: string;
    Account?: string;
    ProfileImageId?: string;
    Password?: string;
    Work?: string;
    Education?: string;

}

export interface UserResponseDto {
    id: string;
    Name: string;
    Username: string;
    Email: string;
    Bio: string;
    Account: string;
    ProfileImageId: string;
    Password: string;
    Work: string;
    Education: string;
  
}
