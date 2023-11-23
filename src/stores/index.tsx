import React, { createContext, useContext } from "react";
import Goods from "./goods";
import User from "./user";

interface Props {
  children?: React.ReactNode
}

class RootStore {
  user: User;
  goods: Goods;
  constructor() {
    this.user = new User();
    this.goods = new Goods();
  }
}

const rootStore = new RootStore();
const ContextStore = createContext(rootStore)

// 提供组件
const RootStoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <ContextStore.Provider value={rootStore}>
      {children}
    </ContextStore.Provider>
  )
}

// 获取上下文
export const useRootStore = (): RootStore => {
  const contextStore: RootStore = useContext(ContextStore)
  return contextStore
}

export default RootStoreProvider
