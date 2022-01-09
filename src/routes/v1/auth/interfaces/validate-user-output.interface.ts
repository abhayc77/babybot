import { Types } from 'mongoose';
import { RolesEnum } from '@decorators/roles.decorator';

export interface ValidateUserOutput {
  readonly _id: Types.ObjectId;

  readonly email?: string;

  readonly flag_mobile_verified: boolean;

  readonly flag_email_verified: boolean;

  readonly role?: RolesEnum;
}
