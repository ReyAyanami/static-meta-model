import User from './models/user';
import Role from './models/role';

const User_ = new User();
const Role_ = new Role();

function criteria(prop) {
  console.log(prop.toString());
}

criteria('======================');
criteria(User_);
criteria(User_.username);
criteria(User_.enabled);
criteria(User_.roles);
criteria(User_.roles.name);
criteria(Role_.name);
criteria(Role_.permissions.name);
criteria(User_.roles);
criteria(User_.roles.permissions);
criteria(User_.roles.permissions.name);