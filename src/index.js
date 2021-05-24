import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "./assets/bootstrap-reboot.css";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import ScrollToTop from "./scrollToTop";

const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: "#373737", background: "" },
    secondary: { main: "#f4511e" },
    footer: {
      background: "#f5f5f7",
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#eeeeee", background: "#090c10" },
    secondary: { main: "#f4511e", background: "#0d1117" },
    footer: {
      background: "#161b22",
    },
  },
});

const Main = () => {
  let darkMode = false;
  const test = darkMode ? themeDark : themeLight;
  return (
    <React.StrictMode>
      <ThemeProvider theme={test}>
        <Router>
          <ScrollToTop />
          <StateProvider initialState={initialState} reducer={reducer}>
            <CssBaseline />
            <App />
          </StateProvider>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
