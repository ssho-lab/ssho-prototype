import ItemStore from "./Item";

class RootStore {
  constructor() {
    this.itemStore = new ItemStore(this);
  }
}

export default RootStore;
