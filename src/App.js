import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home, Portfolio, CoinPage } from "pages";

export default class App extends React.Component {
  state = {
    currencyName: "usd",
  };

  setCurrencyName = (currencyName) => {
    this.setState({
      currencyName,
    });
  };

  render() {
    const { currencyName } = this.state;

    return (
      <Router>
        <div>
          <NavBar
            setCurrencyName={this.setCurrencyName}
            currencyName={currencyName}
          />
          <Switch>
            <Route exact path="/">
              <Home currencyName={currencyName} />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
            <Route
              path="/coin/:id"
              component={(props) => (
                <CoinPage {...props} currencyName={currencyName} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
