import getUsers from "../get-users";
import createContext from "../../../../context.js";
const context = createContext({});

describe("get users endpoint", () => {
  test("should make correct request", async () => {
    const spy = jest.spyOn(context, "makeRequest");
    await getUsers({}, context);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      hostname: "userService",
      path: "/api/users",
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
  });
});
