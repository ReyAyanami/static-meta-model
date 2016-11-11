import Model from './model';
import Role from './role';
import {
  attr,
  relation
} from './decorators';

class User extends Model {
  @attr id: string;
  @attr username: string;
  @attr enabled: boolean;

  @relation roles: Role;
}

export default User;