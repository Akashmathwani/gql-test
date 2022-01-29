import getUsers from "./endpoints/get-users.js";

export default class UserService {
  constructor(context) {
    this._context = context;
  }

  getUsers(args) {
    return getUsers(args, this._context);
  }
}
