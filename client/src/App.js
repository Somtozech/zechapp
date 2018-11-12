import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import Loadable from "react-loadable";
import "./font-awesome/css/fontawesome-all.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const MainApp = Loadable({
  loader: () => import("./components/MainApp"),
  loading() {
    return <div>Loading</div>;
  }
});

const Login = Loadable({
  loader: () => import("./components/Login"),
  loading() {
    return <div>Loading</div>;
  }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/chat" />} />
                <Route path="/chat" component={MainApp} />
                <Route path="/login" component={Login} />
              </Switch>
            </Router>
          </Provider>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
