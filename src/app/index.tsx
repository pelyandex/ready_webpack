import { App } from "./app";
import { StoreProvider, rootStore } from "../models";

export const Index = () => {
  return (
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  );
};
