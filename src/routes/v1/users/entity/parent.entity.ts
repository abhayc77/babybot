import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { GenderEnum } from '../../../enum/gender';
import { ParentTypeEnum } from '../../../enum/parentType';
import { StatusEnum } from '../../../enum/status';

export default class ParentEntity {
  @ApiProperty({ type: String, required: false })
  _id: Types.ObjectId = new Types.ObjectId();

  @ApiProperty({ type: String })
  mobile_number: String = '';

  @ApiProperty({ type: String })
  alt_mobile: String = '';

  @ApiProperty({ type: String })
  first_name: String = '';

  @ApiProperty({ type: String })
  last_name: String = '';

  @ApiProperty({ type: String })
  email: string = '';

  @ApiProperty({ type: String })
  user_pin: String = '';

  @ApiProperty({ type: String })
  password: string = '';

  @ApiProperty({ type: String })
  oAuthkey: String = '';

  @ApiProperty({ type: Date })
  registration_date: Date = new Date();

  @ApiProperty({ type: String })
  mobile_verification_otp: String = '';

  @ApiProperty({ type: Boolean })
  flag_mobile_verified: Boolean = false;

  @ApiProperty({ type: Boolean })
  flag_email_verified: Boolean = false;

  @ApiProperty({ type: 'enum', enum: StatusEnum })
  status: StatusEnum = StatusEnum.reg_in_progress

  @ApiProperty({ type: String })
  clevertap_id: String = '';

  @ApiProperty({ type: Number })
  primary_lat: Number = 2000;

  @ApiProperty({ type: Number })
  primary_lng: Number = 2000;

  @ApiProperty({ type: String })
  city_name: String = '';

  @ApiProperty({ type: String })
  country_name: String = '';

  @ApiProperty({ type: String })
  user_code: String = '';

  @ApiProperty({ type: String })
  user_photo_url: String = '';

  @ApiProperty({ type: String })
  created_by: String = '';

  @ApiProperty({ type: String })
  updated_by: String = '';

  @ApiProperty({ type: 'enum', enum: GenderEnum })
  gender: GenderEnum = GenderEnum.NotAvailable;

  @ApiProperty({ type: Boolean })
  first_child: Boolean = true;

  @ApiProperty({type: 'enum', enum: ParentTypeEnum })
  parent_type: ParentTypeEnum = ParentTypeEnum.NotSet;

  @ApiProperty({ type: Number })
  age: Number = 0;

  @ApiProperty({ type: Number })
  weekly_usage_frequency: Number = 0;

  @ApiProperty({ type: Number })
  usage_interval: Number = 0;
}