import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Parent {
  @ApiProperty({ type: String })
  _id: Types.ObjectId = new Types.ObjectId();

}
