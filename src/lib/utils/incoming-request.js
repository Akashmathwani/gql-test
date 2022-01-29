class Request {
  constructor(options) {
    this.hostname = options.hostname;
    this.method = options.method;
    this.protocol = options.protocol;
    this.path = options.path;
    this.headers = options.headers;
  }
}

class IncomingRequest {
  constructor(options) {
    this.req = new Request(options);
  }

  get hostname() {
    return this.req.hostname;
  }
  get method() {
    return this.req.method;
  }
  get protocol() {
    return this.req.protocol;
  }
  get path() {
    const path = this.req.path;
    const i = path.indexOf("?");
    return ~i ? path.substr(0, i) : path;
  }
  get url() {
    const path = this.req.path + (this.req.search || "");
    return this.req.protocol + "://" + this.req.hostname + path;
  }
}

export default IncomingRequest;
