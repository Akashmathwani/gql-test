import UserType from "./types/user-type.js";

class UserResource {
  constructor(context) {
    this._context = context;
  }
  async getUsers(args) {
    // const userData = await this._context.UserService.getUsers(args);
    //TODO REMOVE THIS MOCK
    const userIds = args?.ids;
    const userData = [{ name: "akash", email: "ak@ak.com" }];
    return userData.map((data, index) => {
      return new UserType(
        { ...data, args, userId: userIds[index] },
        this._context
      );
    });
  }
  async getUser(args) {
    // const userData = await this._context.UserService.getUsers(args);
    //TODO REMOVE THIS MOCK
    const userData = {
      name: "akash",
      email: "ak@ak.com",
      userId: args?.id || "123",
      args,
    };
    return new UserType(userData, this._context);
  }
}

export default UserResource;
