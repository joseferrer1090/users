import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Principal from "./components/Principal/Principal";

class App extends Component {
  render() {
    return (
      <Switch>
        <HashRouter>
          <div>
            <Route exact path="/" component={Principal} />
          </div>
        </HashRouter>
      </Switch>
    );
  }
}

export default App;
