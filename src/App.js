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
import { Home, Portfolio, CoinPage, SearchMobile } from "pages";
import { MainApp } from "App.styles";


export default function App() {
  const search = useSelector((state) => state.search.value);
  const theme = useSelector((state) => state.theme.value)
  const themeColor = (theme) ? light : dark;
  const searchPage = search ? "/search" : "/";
  const searchComponent = search ? SearchMobile : Home;

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
              <Route path={searchPage} component={searchComponent} />
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
