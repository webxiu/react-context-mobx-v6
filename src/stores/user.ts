import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class User {
  name = "张三";
  age = 18;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get borthYear(): number {
    return new Date().getFullYear() - this.age;
  }

  setName(name: string) {
    this.name = name;
  }

  increment() {
    this.age += 1;
  }

  decrement() {
    this.age -= 1;
  }
}

export default User;
