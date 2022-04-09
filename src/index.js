import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {StateProvider} from "./context/state-context";
import {AuthProvider} from "./context/auth-context";
import {GlobalProvider} from "./context/global-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
    <AuthProvider>
    <StateProvider>
    <Router>
    <App />
    </Router>
    </StateProvider>
    </AuthProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
