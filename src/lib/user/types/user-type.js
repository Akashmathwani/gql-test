export default class UserType {
  constructor(data, context) {
    this.data = data;
    this._context = context;
  }

  get __typename() {
    return "UserType";
  }

  id() {
    return this.data?.id;
  }
  displayName() {
    return this.data?.displayName;
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
