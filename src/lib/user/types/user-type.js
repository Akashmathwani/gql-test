export default class UserType {
  constructor(data, context) {
    this.data = data;
    this._context = context;
  }

  id() {
    return this.data?.id;
  }
  displayName() {
    return this.data?.name;
  }
  email() {
    return this.data?.email;
  }
  pets(args) {
    return this._context.PetsResources.getPets(args);
  }
  cars(args) {
    return this._context.CarsResources.getCars(args);
  }
}
