import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app";

const HotApp = hot(App);

render(
  <BrowserRouter>
    <HotApp />
  </BrowserRouter>,
  document.getElementById("root")
);
