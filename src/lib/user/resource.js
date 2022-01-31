import UserType from "./types/user-type.js";

class UserResource {
  constructor(context) {
    this._context = context;
  }
  async getUsers() {
    const userData = await this._context.UserService.getUsers();
    const userIdVsInfoMap = new Map();
    if (!userData) return userIdVsInfoMap;

    const mappedUserData = userData.map((data) => {
      return new UserType(data, this._context);
    });
    mappedUserData.forEach((user) => {
      userIdVsInfoMap.set(user.id(), user);
    });
    return userIdVsInfoMap;
  }

  async getUser(args) {
    const userData = await this._context.UserService.getUser(args);
    if (userData && userData.length > 0) {
      return new UserType(userData[0], this._context);
    }
  }
}

export default UserResource;
