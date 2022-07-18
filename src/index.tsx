import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Index } from "./app";

const container = document.querySelector("#root");

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}
