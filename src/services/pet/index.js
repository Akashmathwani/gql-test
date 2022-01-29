import getPets from "./endpoints/get-pets.js";

export default class PetService {
  constructor(context) {
    this._context = context;
  }

  getPets(args) {
    return getPets(args, this._context);
  }
}
