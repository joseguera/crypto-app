import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark
} from "./components/styles/Theme.styled";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Footer } from "components";
import { Home, Portfolio, CoinPage } from "pages";
import { MainApp } from "App.styles";

export default function App() {
  const [currencyName, setCurrency] = useState("usd");
  const theme = useSelector((state) => state.theme.value)
  const themeColor = (theme) ? light : dark;

  const setCurrencyName = (currencyName) => {
    setCurrency(currencyName)
    localStorage.setItem("current-currency", JSON.stringify(currencyName));
  };

  useEffect(() => {
    localStorage.setItem("current-theme", JSON.stringify(themeColor));
  }, [theme, themeColor]);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    const currentCurrency = JSON.parse(localStorage.getItem("current-currency"));
    if (currentCurrency) {
      setCurrency(currentCurrency);
    }
  }, [])

    return (
      <Router>
        <ThemeProvider theme={themeColor}>
          <GlobalStyles />
          <MainApp>
            <NavBar
              setCurrencyName={setCurrencyName}
              currencyName={currencyName}
              // handleThemeChange={handleThemeChange}
              // selectedTheme={selectedTheme}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Home {...props} currencyName={currencyName} />}
              />
              <Route path="/portfolio" component={Portfolio} />
              <Route
                path="/coin/:id"
                render={(props) => <CoinPage {...props} currencyName={currencyName} />}
              />
            </Switch>
            <Footer />
          </MainApp>
        </ThemeProvider>
      </Router>
    );
}
