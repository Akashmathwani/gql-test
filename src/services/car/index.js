import getCars from "./endpoints/get-cars.js";

export default class CarService {
  constructor(context) {
    this._context = context;
  }

  getCars(args) {
    return getCars(args, this._context);
  }
}
