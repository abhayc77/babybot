import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User, UserSchema } from '@v1/users/schemas/users.schema';

import { GenderEnum } from '../../../enum/gender';
import { ParentTypeEnum } from '../../../enum/parentType';
import { RolesEnum } from '@decorators/roles.decorator';

@Schema()
export class ParentSchema extends UserSchema{

  @Prop({
    type: String,
    required: true,
    default: RolesEnum.parent,
  })
  role : RolesEnum.parent;

  @Prop({
    required: false,
    type: String,
    default: GenderEnum.NotAvailable,
  })
  gender: GenderEnum = GenderEnum.NotAvailable;

  @Prop({
    required: false,
    type: Boolean,
  })
  first_child: Boolean = true;

  @Prop({
    required: false,
    type: String,
    default: ParentTypeEnum.NotSet
  })
  parent_type: ParentTypeEnum = ParentTypeEnum.NotSet;

  @Prop({
    required: false,
    type: Number,
  })
  age: Number = 0;
}

export type ParentDocument = Parent & Document;

export const ParentSchema = SchemaFactory.createForClass(Parent)
  .set('versionKey', false)
  .set('timestamps', true);
