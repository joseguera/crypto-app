import React from "react";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark
} from "./components/styles/Theme.styled";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home, Portfolio, CoinPage } from "pages";
import { MainApp } from "App.styles";

export default class App extends React.Component {
  state = {
    currencyName: "usd",
    selectedTheme: dark
  };

  setCurrencyName = (currencyName) => {
    this.setState({
      currencyName,
    });
  };

  handleThemeChange = (theme) => {
    let themeColor; 
    (theme === "dark") ? themeColor = dark : themeColor = light;
    this.setState({ selectedTheme: themeColor });
  };

  render() {
    const { currencyName, selectedTheme } = this.state;

    return (
      <Router>
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <MainApp>
            <NavBar
              setCurrencyName={this.setCurrencyName}
              currencyName={currencyName}
              handleThemeChange={this.handleThemeChange}
              selectedTheme={selectedTheme}
            />
            <Switch>
              <Route
                exact
                path="/"
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
        </ThemeProvider>
      </Router>
    );
  }
}
