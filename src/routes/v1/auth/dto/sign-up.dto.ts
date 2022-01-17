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
  readonly mobile_number: string = '';

  @ApiProperty({ type: String, example: 'Neeta' })
  @IsNotEmpty()
  readonly first_name: string = '';

  @ApiProperty({ type: String, example: 'Kumar' })
  @IsNotEmpty()
  readonly last_name: string = '';

  @ApiProperty({ type: String, example: 'secretword' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly password: string = '';
}
