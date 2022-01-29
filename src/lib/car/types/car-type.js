export default class CarType {
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
  description() {
    return this.data?.description;
  }
  purchased() {
    return this.data?.purchased;
  }
  userId() {
    return this.data?.userId;
  }
}
