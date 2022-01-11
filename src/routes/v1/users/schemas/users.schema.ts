import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { RolesEnum } from '@decorators/roles.decorator';
import { StatusEnum } from '@decorators/status.decorator';

@Schema()
export class User {

  @Prop({required : true, unique:true, type : String }) 
  mobile_number : String = '';

  @Prop({required : false,  type : String }) 
  alt_mobile : String = '';

  @Prop({required : true,  type : String }) 
  first_name : String = '';

  @Prop({required : true,  type : String }) 
  last_name : String = '';

  @Prop({required : false,  type : String }) 
  email : String = '';

  @Prop({required : true,  type : String }) 
  user_pin : String = '';

  @Prop({required : true,  type : String }) 
  password : String = '';

  @Prop({required : false,  type : String }) 
  oAuthkey : String = '';

  @Prop({required : false,  type : Date }) 
  registration_date : Date = new Date();

  @Prop({required : false,  type : String }) 
  mobile_verification_otp : String = '';

  @Prop({required : false,  type : Boolean }) 
  flag_mobile_verified : Boolean = false;

  @Prop({required : false,  type : Boolean }) 
  flag_email_verified : Boolean = false;

  @Prop({required : false,  type : String, default:StatusEnum.reg_in_progress }) 
  status : StatusEnum = StatusEnum.reg_in_progress;

  @Prop({required : false,  type : String }) 
  clevertap_id : String = '';

  @Prop({required : false,  type : Number }) 
  primary_lat : Number = 2000;

  @Prop({required : false,  type : Number }) 
  primary_lng : Number = 2000;

  @Prop({required : false,  type : String }) 
  city_name : String = '';

  @Prop({required : false,  type : String }) 
  country_name : String = '';

  @Prop({required : false,  type : String }) 
  user_code : String = '';

  @Prop({required : false,  type : String }) 
  user_photo_url : String = '';

  @Prop({required : true,  type : String, default:RolesEnum.parent }) 
  role : RolesEnum = RolesEnum.parent;

  @Prop({required : true,  type : String }) 
  created_by : String = '';

  @Prop({required : true,  type : String }) 
  updated_by : String = '';

  /** 
  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  email: string = '';

  
  @Prop({
    required: true,
    type: String,
  })
  password: string = '';

  @Prop({
    required: true,
    type: Boolean,
  })
  flag_email_verified: boolean = false;

  @Prop({
    required: false,
    type: Boolean,
  })
  mobile_verification_otp : number = 0;

  @Prop({
    required: true,
    type: Boolean,
  })
  flag_mobile_verified : boolean = false;
  
  @Prop({
    required: true,
    type: Boolean,
  })
  flag_blocked : boolean = false;


  @Prop({
    type: String,
    required: false,
    default: RolesEnum.user,
  })
  role: RolesEnum = RolesEnum.user;

  */

}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User).set('versionKey', false).set('timestamps',true);
