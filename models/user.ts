import Model from '../lib/model';
import Role from './role';
import {
  attr,
  relation
} from '../lib/decorators';

class User extends Model {
  @attr id: string;
  @attr username: string;
  @attr enabled: boolean;

  @relation roles: Role;
}

export default User;