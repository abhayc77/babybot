import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';

export default class SignUpDto {
  @ApiProperty({ type: String, example: 'abc@example.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string = '';

  @ApiProperty({ type: String, example: '32323232' })
  @IsNotEmpty()
  readonly mobile: string = '';

  @ApiProperty({ type: String, example: 'secretword' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly password: string = '';
}
