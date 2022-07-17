import { App } from "./app";
import { StoreProvider, rootStore } from "../models";
import "./style.css";
import { Sprite } from "@shared/ui";

export const Index = () => {
  return (
    <StoreProvider value={rootStore}>
      <App />
      <Sprite />
    </StoreProvider>
  );
};
