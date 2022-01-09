import { SetMetadata } from '@nestjs/common';

export enum StatusEnum {
  reg_in_progress = 'reg_in_progress',
  blocked = 'blocked',
  active = 'active',
  deactivated = 'deactivated',
}

export const Statuses = (...statuses: StatusEnum[]) => SetMetadata('statuses', statuses);
