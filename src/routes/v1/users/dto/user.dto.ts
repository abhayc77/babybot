import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsEmail, IsMobilePhone, IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RolesEnum } from '@decorators/roles.decorator';

export default class UserDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @IsEmail()
  readonly email: string = '';

  @ApiProperty({ type: String, example: 'Neeta' })
  @IsNotEmpty()
  readonly first_name: string = '';

  @ApiProperty({ type: String, example: 'Kumar' })
  @IsNotEmpty()
  readonly last_name: string = '';

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @IsMobilePhone()
  readonly mobile_number: string = '';

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly password: string = '';

  @ApiProperty({
    type: String,
    enum: RolesEnum,
    default: RolesEnum.parent,
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(RolesEnum)
  role : RolesEnum = RolesEnum.parent;
}
