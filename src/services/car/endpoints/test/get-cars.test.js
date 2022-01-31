import getUsers from "../get-cars";
import createContext from "../../../../context.js";
const context = createContext({});

describe("get cars endpoint", () => {
  test("should make correct request", async () => {
    const spy = jest.spyOn(context, "makeRequest");
    await getUsers({ userId: "123" }, context);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      hostname: "carservice",
      path: "/api/cars/123",
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
  });
});
