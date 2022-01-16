import * as bcrypt from 'bcrypt';

import { Types } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { User } from '@v1/users/schemas/users.schema';

import { RolesEnum } from '@decorators/roles.decorator';
import { CreateParentDto } from '@v1/users/dto/create-parent.dto';
import ParentsRepository from '@v1/users/parent.repository';
import { Parent } from '@v1/users/entity/parent.entity';

@Injectable()
export default class UsersService {
  constructor(private readonly parentRepository: ParentsRepository) {}

  async createParent(parentDto: CreateParentDto): Promise<User> {
    const hashedPassword: string = await bcrypt.hash(parentDto.password, 10);

    return this.parentRepository.create({
      ...parentDto,
      password: hashedPassword,
    });
  }

  getByEmail(email: string): Promise<User | null> {
    return this.parentRepository.getByEmail(email);
  }

  getById(id: Types.ObjectId): Promise<User | null> {
    return this.parentRepository.getById(id);
  }

  getAll(): Promise<User[] | []> {
    return this.parentRepository.getAll();
  }

  public getVerifiedUserByEmail(email: string): Promise<Parent | null> {
    return this.parentRepository.getVerifiedParentByEmail(email);
  }

  public getVerifiedUserById(id: Types.ObjectId): Promise<Parent | null> {
    return this.parentRepository.getVerifiedParentById(id);
  }

  verifyUser(_id: Types.ObjectId) {
    return this.parentRepository.findOneAndUpdate(_id, { verified: true });
  }
}
