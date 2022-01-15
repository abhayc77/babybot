import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';
import { GenderEnum } from '../../../enum/gender';

export default class SignUpDto {
  @ApiProperty({ type: String, example: 'Neeta' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly first_name: string = '';

  @ApiProperty({ type: String, example: 'Kumar' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly last_name: string = '';


  @ApiProperty({ type: String, example: 'Female', enum: GenderEnum })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly gender: string = '';


  @ApiProperty({ type: String, example: 'abc@example.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string = '';

  @ApiProperty({ type: String, example: 'secretword' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly password: string = '';

  @ApiProperty({ type: String, example: '1234567890' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly mobile: string = '';

}
