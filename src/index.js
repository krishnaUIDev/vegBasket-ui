import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./app/store";
import { Provider } from "react-redux";

import "./assets/bootstrap-reboot.css";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import ScrollToTop from "./scrollToTop";

const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <StateProvider initialState={initialState} reducer={reducer}>
            <CssBaseline />
            <App />
          </StateProvider>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
