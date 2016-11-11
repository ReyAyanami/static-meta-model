import Model from './model';
import {attr} from './decorators';

class Permission extends Model {
  @attr id: string;
  @attr name: string;
}

export default Permission;