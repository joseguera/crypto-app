import React from "react";
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
import LoadingWheel from "components/loading-animations/LoadingWheel/LoadingWheel";


export default function App() {
  const theme = useSelector((state) => state.theme.value)
  const themeColor = (theme) ? light : dark;

    return (
      <Router>
        <ThemeProvider theme={themeColor}>
          <GlobalStyles />
          <MainApp>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => <Home {...props} />}
              />
              <Route path="/portfolio" component={Portfolio} />
              <Route
                path="/coin/:id"
                component={(props) => <CoinPage {...props} />}
              />
            </Switch>
            <Footer />
          </MainApp>
        </ThemeProvider>
      </Router>
    );
}
