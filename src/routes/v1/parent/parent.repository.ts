// import { InjectModel } from '@nestjs/mongoose';
// import { Types, Model } from 'mongoose';
// import { Injectable } from '@nestjs/common';
//
// import { RolesEnum } from '@decorators/roles.decorator';
//
// import { CreateParentDto } from '@v1/parent/dto/create-parent.dto';
// import { Parent, ParentDocument } from './schemas/parent.schema';
// import { IUpdateParent } from './interfaces/update-parent-fields';
//
//
// @Injectable()
// export default class ParentsRepository_NotInUse {
//   constructor(
//     @InjectModel(Parent.name) private ParentModel: Model<ParentDocument>,
//   ) {}
//
//   public create(parent: CreateParentDto): Promise<Parent> {
//     return this.ParentModel.create(parent);
//   }
//
//   public async getByEmail(email: string): Promise<Parent | null> {
//     const foundParent: Parent | null = await this.ParentModel.findOne({
//       email,
//     });
//     return foundParent || null;
//   }
//
//   public async getById(id: Types.ObjectId): Promise<Parent | null> {
//     const foundParent: Parent | null = await this.ParentModel.findOne({
//       _id: id,
//     });
//     return foundParent || null;
//   }
//
//   public async getAll(): Promise<Parent[] | []> {
//     const foundParents: Parent[] | [] = await this.ParentModel.find({}, { password: false }).lean();
//
//     return foundParents.length > 0 ? foundParents : [];
//   }
//
//   public async getVerifiedParentByEmail(email: string): Promise<Parent | null> {
//     const foundParent: Parent | null = await this.ParentModel.findOne({
//       email,
//       verified: true,
//     });
//
//     return foundParent || null;
//   }
//
//   public async getVerifiedParentById(id: Types.ObjectId): Promise<Parent | null> {
//     const foundParent: Parent | null = await this.ParentModel.findOne({
//       _id: id,
//       verified: true,
//     });
//
//     return foundParent || null;
//   }
//
//   public findOneAndUpdate(_id: Types.ObjectId, fieldForUpdate: IUpdateParent) {
//     return this.ParentModel.findByIdAndUpdate({ _id }, fieldForUpdate);
//   }
// }
