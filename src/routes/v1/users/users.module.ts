import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import UsersRepository from './users.repository';
import { UserSchema } from './schemas/users.schema';

import UsersController from './users.controller';
import UsersService from './users.service';
import { User } from '@v1/users/schemas/users.schema';
import { RolesEnum } from '@decorators/roles.decorator';
import { Parent, ParentDocument, ParentSchema } from '@v1/users/schemas/parent.schema';
import { Admin, AdminDocument, AdminSchema } from '@v1/users/schemas/admin.schema';
import ParentsService from '@v1/users/parents.service';
import ParentsRepository from '@v1/users/parent.repository';

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
    MongooseModule.forFeature([{
      name: Parent.name,
      schema: ParentSchema,
    }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, ParentsService, ParentsRepository],
  exports: [UsersService, UsersRepository, ParentsService, ParentsRepository],
})
export default class UsersModule {}
