import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider, rootStore } from "../models";
import { App } from "./app";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <StoreProvider value={rootStore}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  );
}
