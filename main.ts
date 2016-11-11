import User from './models/user';
import Role from './models/role';

const user = new User();
const role = new Role();

function criteria(prop) {
  console.log(prop.toString());
}

criteria('======================');
criteria(user);
criteria(user.username);
criteria(user.enabled);
criteria(user.roles);
criteria(user.roles.name);
criteria(role.name);
criteria(role.permissions.name);
criteria(user.roles);
criteria(user.roles.permissions);
criteria(user.roles.permissions.name);