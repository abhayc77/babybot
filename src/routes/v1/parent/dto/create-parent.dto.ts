import { GenderEnum } from '../../../enum/gender';
import { ParentTypeEnum } from '../../../enum/parentType';

export class CreateParentDto_not_in_use {
  gender : GenderEnum = GenderEnum.NotAvailable;
  parent_type : ParentTypeEnum = ParentTypeEnum.NotSet;
  age : Number = 0;
  first_child : Boolean = true;
  weekly_usage_frequency : Number = 0;
  usage_interval : Number = 0;
  created_by : String = "" ;
  updated_by : String = "" ;
}
