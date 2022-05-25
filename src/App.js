import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home, Portfolio, CoinPage } from "pages";

export default class App extends React.Component {
  state = {
    currencyName: "usd",
    cryptoName: "bitcoin"
  };

  getCurrencyName = (value) => {
    this.setState({
      currencyName: value
    });
  };

  getCryptoName = (value) => {
    this.setState({
      cryptoName: value
    });
  };

  render() {
    const { currencyName, cryptoName } = this.state;
    return (
      <Router>
        <div>
          <NavBar getCurrencyName={this.getCurrencyName} currencyName={currencyName} />
          <Switch>
            <Route exact path="/">
              <Home currencyName={currencyName} getCryptoName={this.getCryptoName} cryptoName={cryptoName} />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/coin/:id" component={(props) => <CoinPage {...props} currencyName={currencyName} />}  />
          </Switch>
        </div>
      </Router>
    );
  }
}
