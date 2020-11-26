import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./store";
import axios from "axios";

// axios.defaults.headers.common["X-FOO-BAR"] = "Origin";
// axios.defaults.headers.common["X-Access-Token"] = "X-Access-Token";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="top_white"></div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/store" component={Store} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
