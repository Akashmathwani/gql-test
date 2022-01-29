import IncomingRequest from "./lib/utils/incoming-request.js";
import makeRequest from "./lib/utils/make-request.js";
import UserService from "./services/user/index.js";
import PetService from "./services/pet/index.js";
import CarService from "./services/car/index.js";

class Context {
  constructor(options) {
    this.incomingRequest =
      options?.incomingRequest && new IncomingRequest(options.incomingRequest);
    this.UserService = new UserService(this);
    this.PetService = new PetService(this);
    this.CarService = new CarService(this);
    this.makeRequest = makeRequest;
  }
}

function createContext(args) {
  const incomingRequest = args?.req;
  const context = new Context({ incomingRequest });
  return context;
}

export default createContext;
