# Static Meta Model

Inspired by [Static Meta Model for JPA](http://www.thoughts-on-java.org/static-metamodel/)

Let's assume that we have User model

```js
class User extends Model {
  @attr id: string;
  @attr username: string;
  @attr enabled: boolean;

  @relation roles: Role;
}
```

So in UserService we can write something like this

```js

import Service, {Criteria} from './service';
import User_ from './models';

class UserService extends Service {

  static getByRolePermissionName(rolePermissionName) {
    const query = Criteria.newQuery();

    query.add(Criteria.equal(User_.roles.permissions.name, rolePermissionName));

    return UserService.fetch(query);
  }

}

export default UserService;

```

Take a look at that `query.add(Criteria.equal(User_.roles.permissions.name, rolePermissionName));`.
This is equal to `query.add(Criteria.equal('roles.permissions.name', rolePermissionName));`

But in the first version we have type protection.

test
