import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home, Portfolio, CoinPage } from "pages";

export default class App extends React.Component {
  state = {
    currencyName: ""
  };

  currencyConverter = (value) => {
    this.setState({
      currencyName: value,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar currencyConverter={this.currencyConverter} />
          <Switch>
            <Route exact path="/">
              <Home currencyName={this.state.currencyName} />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/coinpage/:id" component={CoinPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
