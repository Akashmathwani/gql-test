export default class PetType {
  constructor(data, context) {
    this.data = data;
    this._context = context;
  }

  id() {
    return this.data?.id;
  }
  name() {
    return this.data?.name;
  }
  age() {
    return this.data?.age;
  }
  type() {
    return this.data?.type;
  }
  userId() {
    return this.data?.userId;
  }
}
