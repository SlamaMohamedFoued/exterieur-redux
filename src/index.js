import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main/Main";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./components/Store/store";
import Users from "./components/users/Users";
import store from "./store";

import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="top_white"></div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/store" component={Store} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
