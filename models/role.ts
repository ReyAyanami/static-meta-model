import Model from '../lib/model';
import Permission from './permission';
import {
  attr,
  relation
} from '../lib/decorators';

class Role extends Model {
  @attr id: string;
  @attr name: string;

  @relation permissions: Permission;
}

export default Role;