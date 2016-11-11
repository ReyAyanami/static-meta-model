// import {attr} from './decorators';
import {
  META_INFO_CONTAINER,
  PARENT_NAME_CONTAINER
} from './settings';

abstract class Model {
  constructor(parentName = '') {
    this[PARENT_NAME_CONTAINER] = parentName;
    if (this[META_INFO_CONTAINER]) {
      const fields: Map<string, string> = this[META_INFO_CONTAINER];
      fields.forEach((value, field) => {
        this[field] = value;
      });
    }
  }

  toString() {
    return this[PARENT_NAME_CONTAINER];
  }
}

export default Model;