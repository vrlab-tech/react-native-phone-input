let instance = null;

class FlagResource {
  static getInstance() {
    if (!instance) {
      instance = new FlagResource();
    }
    return instance;
  }

  constructor() {
    this.flags = {
      ca: require("./images/ca.png"),
      in: require("./images/in.png"),
      us: require("./images/us.png")
    };
  }

  get(name) {
    return this.flags[name];
  }
}

export default FlagResource.getInstance();
