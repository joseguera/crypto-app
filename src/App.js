import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveHeader } from "./features/header/headerSlice";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./components/styles/Theme.styled";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Footer } from "components";
import { Home, Portfolio, CoinPage, SearchMobile } from "pages";
import { MainApp } from "App.styles";

export default function App() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value);
  const theme = useSelector((state) => state.theme.value);
  const themeColor = theme ? light : dark;
  const searchComponent = search ? SearchMobile : Home;
  const [paths, setPaths] = useState({
    home: { id: "home", clicked: true, path: "/", header: "Overview" },
    portfolio: {
      id: "portfolio",
      clicked: true,
      path: "/portfolio",
      header: "Portfolio",
    },
    summary: {
      id: "summary",
      clicked: true,
      path: "/coin/:id",
      header: "Summary",
    },
    search: { id: "footer", clicked: true, path: "/search", header: "✖ Close" },
  });

  const setHeader = (id) => {
    if (id !== "undefined") dispatch(setActiveHeader(id));
  };

  return (
    <Router>
      <ThemeProvider theme={themeColor}>
        <GlobalStyles />
        <MainApp>
          <NavBar paths={paths} setHeader={setHeader} />
          <Switch>
            <Route
              exact
              path={paths.home.path}
              component={(props) => <Home {...props} setHeader={setHeader} />}
            />
            <Route path={paths.portfolio.path} component={Portfolio} />
            <Route path={paths.search.path} component={searchComponent} />
            <Route
              path={paths.summary.path}
              component={(props) => <CoinPage {...props} />}
            />
          </Switch>
          <Footer setHeader={setHeader} />
        </MainApp>
      </ThemeProvider>
    </Router>
  );
}
