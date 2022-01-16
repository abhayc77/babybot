import { InjectModel } from '@nestjs/mongoose';
import { Types, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { CreateParentDto } from '@v1/users/dto/create-parent.dto';
import { Parent, ParentDocument } from './schemas/parent.schema';
import { IUpdateParent } from './interfaces/update-parent-fields';

@Injectable()
export default class ParentsRepository {
  constructor(
    @InjectModel(Parent.name) private parentDataModel: Model<ParentDocument>,
  ) {}

  public create(parent: CreateParentDto): Promise<Parent> {
    return this.parentDataModel.create(parent);
  }

  public async getByEmail(email: string): Promise<Parent | null> {
    const foundParent: Parent | null = await this.parentDataModel.findOne({
      email,
    });
    return foundParent || null;
  }

  public async getById(id: Types.ObjectId): Promise<Parent | null> {
    const foundParent: Parent | null = await this.parentDataModel.findOne({
      _id: id,
    });
    return foundParent || null;
  }

  public async getAll(): Promise<Parent[] | []> {
    const foundParents: Parent[] | [] = await this.parentDataModel.find({}, { password: false }).lean();

    return foundParents.length > 0 ? foundParents : [];
  }

  public async getVerifiedParentByEmail(email: string): Promise<Parent | null> {
    const foundParent: Parent | null = await this.parentDataModel.findOne({
      email,
      flag_mobile_verified: true,
    });

    return foundParent || null;
  }

  public async getVerifiedParentById(id: Types.ObjectId): Promise<Parent | null> {
    const foundParent: Parent | null = await this.parentDataModel.findOne({
      _id: id,
      flag_mobile_verified: true,
    });

    return foundParent || null;
  }

  public findOneAndUpdate(_id: Types.ObjectId, fieldForUpdate: IUpdateParent) {
    return this.parentDataModel.findByIdAndUpdate({ _id }, fieldForUpdate);
  }
}
