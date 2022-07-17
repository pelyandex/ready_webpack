import { types, Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";

export const root = types
  .model({
    projectStatus: "stopped"
  })
  .actions(self => ({
    setProjectStatus: (value: string) => {
      self.projectStatus = value;
    }
  }));

interface IRootStore extends Instance<typeof root> {}
const StoreContext = createContext<IRootStore>({} as IRootStore);

export const rootStore = root.create();

if (process.env.NODE_ENV === "development") {
  const { connectReduxDevtools } = require("mst-middlewares");
  connectReduxDevtools(require("remotedev"), rootStore);
}

export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
