import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider, rootStore } from "../models";
import { App } from "./app";

const HotApp = hot(App);

render(
  <BrowserRouter>
    <StoreProvider value={rootStore}>
      <HotApp />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
