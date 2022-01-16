
import { GenderEnum } from '../../../enum/gender';
import { ParentTypeEnum } from '../../../enum/parentType';
import { ApiProperty } from '@nestjs/swagger';
import { StatusEnum } from '../../../enum/status';
import { RolesEnum } from '@decorators/roles.decorator';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateParentDto {

  @ApiProperty({ type: String, example: '1235487893' })
  @IsNotEmpty()
  mobile_number: String = '';

  @ApiProperty({ type: String, example: '1235487893' })
  alt_mobile: String = '';

  @ApiProperty({ type: String, example: 'Neeta' })
  first_name: String = '';

  @ApiProperty({ type: String, example: 'Kumar' })
  last_name: String = '';

  @ApiProperty({ type: String, enum: GenderEnum, default: GenderEnum.NotAvailable, example: 'Male | Female | Other'})
  @IsNotEmpty()
  @IsString()
  @IsEnum(GenderEnum)
  gender: GenderEnum = GenderEnum.NotAvailable;

  @ApiProperty({ type: String, enum: ParentTypeEnum, default: ParentTypeEnum.NotSet, example: 'Mother | Father | GrandMother | GrandFather | Relative' })
  @IsNotEmpty()
  @IsString()
  @IsEnum(ParentTypeEnum)
  parentType:ParentTypeEnum = ParentTypeEnum.NotSet;

  @ApiProperty({ type: String, example: 'abc@def.com' })
  @IsEmail()
  @IsNotEmpty()
  email: String = "";

  @ApiProperty({ type: String, example: '1234' })
  user_pin: String = '';

  @ApiProperty({ type: String, example: 'your_secret_word'})
  password: String = '';

  @ApiProperty({ type: String, example: 'Mumbai' })
  city_name: String = '';

  @ApiProperty({ type: String, example: 'India' })
  country_name: String = '';

  /**
  @ApiProperty({ type: Date })
  registration_date: Date = new Date();

  @ApiProperty({ type: String, example: 'oAuthKey'})
  oAuthkey: String = '';

  @ApiProperty({ type: String })
  mobile_verification_otp: String = '';

  @ApiProperty({ type: Boolean })
  flag_mobile_verified: Boolean = false;

  @ApiProperty({ type: Boolean })
  flag_email_verfied: Boolean = false;

  @ApiProperty({ type: String, enum: StatusEnum, default: StatusEnum.reg_in_progress })
  @IsNotEmpty()
  @IsString()
  @IsEnum(StatusEnum)
  status:StatusEnum = StatusEnum.reg_in_progress;

  @ApiProperty({ type: String })
  clevertap_id: String = '';

  @ApiProperty({ type: Number })
  primary_lat: Number = 2000;

  @ApiProperty({ type: Number })
  primary_lng: Number = 2000;

  @ApiProperty({ type: String })
  user_code: String = '';

  @ApiProperty({ type: String })
  user_photo_url: String = '';

  @ApiProperty({
    type: String,
    enum: RolesEnum,
    default: RolesEnum.parent,
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(RolesEnum)
  role: RolesEnum = RolesEnum.parent;
   */
}
