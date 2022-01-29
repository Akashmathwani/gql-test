import PetType from "./types/pet-type.js";

export default class PetsResources {
  constructor(context) {
    this._context = context;
  }

  getPets(args) {
    // const petsData = await this._context.PetService.getPets(args);
    const petsData = [
      { ...args, name: "xoxo", type: "dog", id: "123", age: 4 },
    ];
    return petsData.map((data) => {
      return new PetType(data, this._context);
    });
  }
}
