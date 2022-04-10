import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home, Portfolio, CoinPage } from "pages";

export default class App extends React.Component {
  state = {
    currencyName: "usd",
  };

  getCurrencyName = (value) => {
    this.setState({
      currencyName: value
    });
  };

  render() {
    const { currencyName, btcIcon, ethIcon } = this.state;
    return (
      <Router>
        <div>
          <NavBar getCurrencyName={this.getCurrencyName} currencyName={currencyName} btcIcon={btcIcon} ethIcon={ethIcon} />
          <Switch>
            <Route exact path="/">
              <Home currencyName={currencyName} />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/coinpage/:id" component={CoinPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
