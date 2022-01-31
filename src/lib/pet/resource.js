import PetType from "./types/pet-type.js";

export default class PetsResources {
  constructor(context) {
    this._context = context;
  }

  async getPets(args) {
    const petsData = await this._context.PetService.getPets(args);
    return (petsData || []).map((data) => {
      return new PetType(data, this._context);
    });
  }
}
