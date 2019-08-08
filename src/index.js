import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
