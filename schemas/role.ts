import Model from './model';
import Permission from './permission';
import {
  attr,
  relation
} from './decorators';

class Role extends Model {
  @attr id: string;
  @attr name: string;

  @relation permissions: Permission;
}

export default Role;