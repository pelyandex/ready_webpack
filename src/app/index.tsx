import "./style.css";

import { Sprite } from "@shared/ui";

import { rootStore, StoreProvider } from "../models";
import { App } from "./app";

export const Index = () => {
  return (
    <StoreProvider value={rootStore}>
      <App />
      <Sprite />
    </StoreProvider>
  );
};
