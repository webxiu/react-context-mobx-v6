import { makeAutoObservable } from "mobx";

class Goods {
  product = "衣服";
  price = 200;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get borthYear(): number {
    return this.price;
  }

  changeProduct(product: string) {
    this.product = product;
  }

  setPrice(price: number) {
    this.price = price;
  }
}

export default Goods;
