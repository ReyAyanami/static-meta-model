import Model from '../lib/model';
import {attr} from '../lib/decorators';

class Permission extends Model {
  @attr id: string;
  @attr name: string;
}

export default Permission;