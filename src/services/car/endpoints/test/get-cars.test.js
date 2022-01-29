import getUsers from "../get-cars";
import createContext from "../../../../context.js";
const context = createContext({});

describe("get cars endpoint", () => {
  test("should make correct request", async () => {
    const spy = jest.spyOn(context, "makeRequest");
    await getUsers({}, context);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      hostname: "https://jsonplaceholder.typicode.com",
      path: "/cars",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  });
});
