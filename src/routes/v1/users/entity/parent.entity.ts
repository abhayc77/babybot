import { ApiProperty, PartialType } from '@nestjs/swagger';
import { GenderEnum } from '../../../enum/gender';
import { User } from '@v1/users/schemas/users.schema';
import { ParentTypeEnum } from '../../../enum/parentType';
import { StatusEnum } from '../../../enum/status';
import { RolesEnum } from '@decorators/roles.decorator';

export class Parent extends User {
  @ApiProperty({
    type: 'enum',
    enum: GenderEnum
  })
  gender: GenderEnum = GenderEnum.NotAvailable;

  @ApiProperty({ type: Boolean })
  first_child: Boolean = true;

  @ApiProperty({
    type: 'enum',
    enum: ParentTypeEnum
  })
  parent_type: ParentTypeEnum = ParentTypeEnum.NotSet;

  @ApiProperty({ type: Number })
  age: Number = 0;

  @ApiProperty({ type: Number })
  weekly_usage_frequency: Number = 0;

  @ApiProperty({ type: Number })
  usage_interval: Number = 0;

}
