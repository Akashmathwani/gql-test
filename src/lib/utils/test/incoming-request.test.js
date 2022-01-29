import IncomingRequest from "../incoming-request.js";

describe("Incoming request", () => {
  test("Should set correct properties from incoming request", () => {
    const req = {
      hostname: "www.abcd.com",
      headers: [{ "content-type": "test" }],
      path: "/test?a=1",
      protocol: "http",
      method: "GET",
    };
    const incomingRequest = new IncomingRequest(req);
    expect(incomingRequest.hostname).toBe("www.abcd.com");
    expect(incomingRequest.path).toBe("/test");
    expect(incomingRequest.protocol).toBe("http");
    expect(incomingRequest.method).toBe("GET");
    expect(incomingRequest.url).toBe("http://www.abcd.com/test?a=1");
  });
});
