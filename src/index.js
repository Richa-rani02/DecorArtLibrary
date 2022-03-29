import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {StateProvider} from "./context/state-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
    <Router>
    <App />
    </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
