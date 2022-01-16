import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import UsersRepository from './users.repository';
import { UserSchema } from './schemas/users.schema';

import UsersController from './users.controller';
import UsersService from './users.service';
import { User } from '@v1/users/schemas/users.schema';
import { RolesEnum } from '@decorators/roles.decorator';
import { ParentSchema } from '@v1/users/schemas/parent.schema';
import { AdminSchema } from '@v1/users/schemas/admin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema,
      discriminators: [
        { name: RolesEnum.parent, schema: ParentSchema },
        { name: RolesEnum.admin, schema: AdminSchema },
      ],
    }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export default class UsersModule {}
