/*App.js*/
import React, { Component } from "react";
import history from './pages/history/history';
import Index from "./pages/comp"
import Comp from "./pages/comp2"
import "./App.css"

import {
  Router,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      return ( 
      <>
      <Router history={history}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/route" component={Comp} />
        <Route path="*" component={Index} />
      </Switch>
      </Router>
      </>
    );
  }
}

export default App;
