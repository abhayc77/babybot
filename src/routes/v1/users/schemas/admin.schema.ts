import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '@v1/users/schemas/users.schema';

import { GenderEnum } from '../../../enum/gender';
import { ParentTypeEnum } from '../../../enum/parentType';
import { RolesEnum } from '@decorators/roles.decorator';

@Schema()
export class Admin extends User{
  role : String = RolesEnum.admin;
}

export type AdminDocument = Admin & Document;

export const AdminSchema = SchemaFactory.createForClass(Admin)
  .set('versionKey', false)
  .set('timestamps', true);
