import getUsers from "./endpoints/get-users.js";
import getUser from "./endpoints/get-user.js";

export default class UserService {
  constructor(context) {
    this._context = context;
  }

  getUsers(args) {
    return getUsers(args, this._context);
  }

  getUser(args) {
    return getUser(args, this._context);
  }
}
