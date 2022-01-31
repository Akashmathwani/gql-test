import getUser from "../get-user.js";
import createContext from "../../../../context.js";
const context = createContext({});

describe("get users endpoint", () => {
  test("should make correct request", async () => {
    const spy = jest.spyOn(context, "makeRequest");
    await getUser({ id: "123" }, context);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      hostname: "userService",
      path: "/api/users/123",
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
  });
});
