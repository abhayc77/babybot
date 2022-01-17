import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GenderEnum } from '../../../enum/gender';
import { ParentTypeEnum } from '../../../enum/parentType';
import { StatusEnum } from '../../../enum/status';

export type ParentDocument = Parent & Document;

@Schema()
export class Parent {
  @Prop({required: true, unique:true, type: String })
  mobile_number: String = '';

  @Prop({required: false, type: String })
  alt_mobile: String = '';

  @Prop({required: true, type: String })
  first_name: String = '';

  @Prop({required: true, type: String })
  last_name: String = '';

  @Prop({required: false, type: String })
  email: string = '';

  @Prop({required: false, type: String })
  user_pin: String = '';

  @Prop({required: true, type: String })
  password: string = '';

  @Prop({required: false, type: String })
  oAuthkey: String = '';

  @Prop({required: false, type: Date })
  registration_date: Date = new Date();

  @Prop({required: false, type: String })
  mobile_verification_otp: String = '';

  @Prop({required: false, type: Boolean })
  flag_mobile_verified: Boolean = false;

  @Prop({required: false, type: Boolean })
  flag_email_verified: Boolean = false;

  @Prop({required: false, type: String, default: StatusEnum.reg_in_progress })
  status: StatusEnum = StatusEnum.reg_in_progress;

  @Prop({required: false, type: String })
  clevertap_id: String = '';

  @Prop({required: false, type: Number })
  primary_lat: Number = 2000;

  @Prop({required: false, type: Number })
  primary_lng: Number = 2000;

  @Prop({required: false, type: String })
  city_name: String = '';

  @Prop({required: false, type: String })
  country_name: String = '';

  @Prop({required: false, type: String })
  user_code: String = '';

  @Prop({required: false, type: String })
  user_photo_url: String = '';

  @Prop({required: true, type: String })
  created_by: String = '';

  @Prop({required: true, type: String })
  updated_by: String = '';

  @Prop({required: false, type: String, default: GenderEnum.NotAvailable })
  gender: GenderEnum = GenderEnum.NotAvailable;

  @Prop({ required: false, type: Boolean })
  first_child: Boolean = true;

  @Prop({required: false, type: String, default: ParentTypeEnum.NotSet })
  parent_type: ParentTypeEnum = ParentTypeEnum.NotSet;

  @Prop({required: false, type: Number })
  age: Number = 0;

  @Prop({ type: Number })
  weekly_usage_frequency: Number = 0;

  @Prop({ type: Number })
  usage_interval: Number = 0;

  /*
  @Prop({
    type: String,
    required: true,
    default: RolesEnum.parent,
  })
  role : RolesEnum = RolesEnum.parent;

   */

}

export const ParentSchema = SchemaFactory.createForClass(Parent)
  .set('versionKey', false)
  .set('timestamps', true);
