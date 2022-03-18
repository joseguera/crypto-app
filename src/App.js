import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { Home, Portfolio, CoinPage } from 'pages';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}