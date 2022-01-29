import CarType from "./types/car-type.js";

export default class CarsResources {
  constructor(context) {
    this._context = context;
  }

  async getCars(args) {
    // const CarsData = await this._context.CarService.getCars(args);
    //TODO REMOVE THIS MOCK
    const carsData = [
      {
        ...args,
        purchased: "2021-10-02",
        description: "nice car",
        name: "BMW",
      },
    ];
    return carsData.map((data) => {
      return new CarType(data, this._context);
    });
  }
}
