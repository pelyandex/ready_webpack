import { types, Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";

export const root = types
  .model({
    auth: "as",
    asd: "asd"
  })
  .views(() => ({
    get temp() {
      return "123";
    }
  }))
  .actions(self => {
    const toggle = (value: string) => {
      self.auth = value;
    };

    return {
      toggle
    };
  });

interface IRootStore extends Instance<typeof root> {}
const StoreContext = createContext<IRootStore>({} as IRootStore);

export const rootStore = root.create();

if (process.env.NODE_ENV === "development") {
  const { connectReduxDevtools } = require("mst-middlewares");
  connectReduxDevtools(require("remotedev"), rootStore);
}

export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
