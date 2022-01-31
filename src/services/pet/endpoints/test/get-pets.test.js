import getUsers from "../get-pets";
import createContext from "../../../../context.js";
const context = createContext({});

describe("get pets endpoint", () => {
  test("should make correct request", async () => {
    const spy = jest.spyOn(context, "makeRequest");
    await getUsers({ userId: "123" }, context);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      hostname: "petService",
      path: "/api/pets/123",
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
  });
});
