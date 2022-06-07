import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home, Portfolio, CoinPage } from "pages";

export default class App extends React.Component {
  state = {
    currencyName: "usd",
    cryptoName: "bitcoin",
    dateRange: 1,
  };

  getCurrencyName = (currencyName) => {
    this.setState({
      currencyName
    });
  };

  getCryptoName = (cryptoName) => {
    this.setState({
      cryptoName
    });
  };

  getDateRange = (dateRange) => {
    this.setState({
      dateRange
    });
  };

  render() {
    const { currencyName, cryptoName, dateRange } = this.state;
  
    return (
      <Router>
        <div>
          <NavBar
            getCurrencyName={this.getCurrencyName}
            currencyName={currencyName}
          />
          <Switch>
            <Route exact path="/">
              <Home
                currencyName={currencyName}
                getCryptoName={this.getCryptoName}
                cryptoName={cryptoName}
                getDateRange={this.getDateRange}
                dateRange={dateRange}
              />
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
