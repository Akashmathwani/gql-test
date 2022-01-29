export default class UserType {
  constructor(data, context) {
    this.data = data;
    this._context = context;
  }

  id() {
    return this.data?.userId;
  }
  displayName() {
    return this.data?.name;
  }
  email() {
    return this.data?.email;
  }
  pets() {
    return this._context.PetsResources.getPets({
      userId: this.id(),
    });
  }
  cars() {
    return this._context.CarsResources.getCars({
      userId: this.id(),
    });
  }
}
