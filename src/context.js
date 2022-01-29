import IncomingRequest from "./lib/utils/incoming-request.js";
import makeRequest from "./lib/utils/make-request.js";

class Context {
  constructor(options) {
    this.incomingRequest = new IncomingRequest(options.incomingRequest);
    this.makeRequest = makeRequest;
  }
}

function createContext(args) {
  const request = args?.req;
  const incomingRequest = new IncomingRequest(request);
  const context = new Context({ incomingRequest });
  return context;
}

export default createContext;
