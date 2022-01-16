import { ObjectId } from 'mongodb';

export interface IUpdateParent {
  readonly [key: string]: string | boolean | number | ObjectId;
}
