import CarType from "./types/car-type.js";

export default class CarsResources {
  constructor(context) {
    this._context = context;
  }

  async getCars(args) {
    const carsData = await this._context.CarService.getCars(args);
    return (carsData || []).map((data) => {
      return new CarType(data, this._context);
    });
  }
}
