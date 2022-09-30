import React, { useState, useEffect } from "react";
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
  const [selectedTheme, setSelectedTheme] = useState(dark);

  const setCurrencyName = (currencyName) => {
    setCurrency(currencyName)
    localStorage.setItem("current-currency", JSON.stringify(currencyName));
  };

  const handleThemeChange = (theme) => {
    let themeColor; 
    (theme === "dark") ? themeColor = dark : themeColor = light;
    setSelectedTheme(themeColor);
    localStorage.setItem("current-theme", JSON.stringify(themeColor));
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
    const currentCurrency = JSON.parse(localStorage.getItem("current-currency"));
    if (currentCurrency) {
      setCurrency(currentCurrency);
    }
  }, [])

    return (
      <Router>
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <MainApp>
            <NavBar
              setCurrencyName={setCurrencyName}
              currencyName={currencyName}
              handleThemeChange={handleThemeChange}
              selectedTheme={selectedTheme}
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
                render={(props) => <CoinPage {...props} currencyName={currencyName} selectedTheme={selectedTheme} />}
              />
            </Switch>
            <Footer />
          </MainApp>
        </ThemeProvider>
      </Router>
    );
}
