import UserType from "./types/user-type.js";

class UserResource {
  constructor(context) {
    this._context = context;
  }
  async getUsers(args) {
    // const userData = await this._context.UserService.getUsers(args);
    //TODO REMOVE THIS MOCK
    const userData = [
      { name: "akash", email: "ak@ak.com", id: args?.id || "123" },
    ];
    return userData.map((data) => {
      return new UserType(data, this._context);
    });
  }
  async getUser(args) {
    // const userData = await this._context.UserService.getUsers(args);
    //TODO REMOVE THIS MOCK
    const userData = {
      name: "akash",
      email: "ak@ak.com",
      id: args?.id || "123",
    };
    return new UserType(userData, this._context);
  }
}

export default UserResource;
