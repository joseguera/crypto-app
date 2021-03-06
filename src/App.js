import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home, Portfolio, CoinPage } from "pages";
import { MainApp } from "App.styles";
import "./App.css";

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
        <MainApp>
          <NavBar
            setCurrencyName={this.setCurrencyName}
            currencyName={currencyName}
          />
          <Switch>
            <Route exact path="/"
              component={(props) => (
                <Home {...props} currencyName={currencyName} />
              )}
            />
            <Route path="/portfolio" component={Portfolio} />
            <Route
              path="/coin/:id"
              component={(props) => (
                <CoinPage {...props} currencyName={currencyName} />
              )}
            />
          </Switch>
        </MainApp>
      </Router>
    );
  }
}
