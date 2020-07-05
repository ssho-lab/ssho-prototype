import { observable, action } from "mobx";

class ItemStore {
  constructor(root) {
    this.root = root;
  }

  @observable itemList = [1, 2, 3];

  @action getItem() {
    return this.itemList;
  }
}

export default ItemStore;
