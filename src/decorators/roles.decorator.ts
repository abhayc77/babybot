import { SetMetadata } from '@nestjs/common';

export enum RolesEnum {
  admin = 'admin_role',
  user = 'user_role'
}

export const Roles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);
