import React from "react";
import ReactDOM from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";

import App from "./App";

import "./style.scss";

const root = document.getElementById("root");

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App);

if ((module as any ).hot) {
  (module as any ).hot.accept("./App", () => {
    render(<h1>123</h1>);
  });
}
