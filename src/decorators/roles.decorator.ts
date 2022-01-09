import { SetMetadata } from '@nestjs/common';

export enum RolesEnum {
  admin = 'admin',
  parent = 'parent'
}

export const Roles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);
