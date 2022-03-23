import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from 'components';
import { Home, Portfolio, CoinPage } from "pages";

export default class App extends React.Component {
  state = {
    list: [
      { value: "bitcoin", id: 0 },
      { value: "dogecoin", id: 1 },
      { value: "ethereum", id: 2 },
    ],
  };
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home list={this.state.list} />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/coinpage/:id" component={CoinPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
