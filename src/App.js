import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./components/styles/Theme.styled";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Footer } from "components";
import { Home, Portfolio, CoinPage, SearchMobile } from "pages";
import { MainApp } from "App.styles";

export default function App() {
  const search = useSelector((state) => state.search.value);
  const theme = useSelector((state) => state.theme.value);
  const themeColor = theme ? light : dark;
  const searchComponent = search ? SearchMobile : Home;
  const [id, setId] = useState("home");
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
    search: { id: "search", clicked: true, path: "/search", header: "✖ Close" },
  });

  const setHeader = (id) => {
    id !== "undefined" && setId(id);
  };

  const selected = (id) => {
    setId(id);
  };

  return (
    <Router>
      <ThemeProvider theme={themeColor}>
        <GlobalStyles />
        <MainApp>
          <NavBar
            paths={paths}
            id={id}
            setHeader={setHeader}
            selected={selected}
          />
          <Switch>
            <Route
              exact
              path={paths.home.path}
              component={(props) => (
                <Home {...props} setHeader={setHeader} selected={selected} />
              )}
            />
            <Route path={paths.portfolio.path} component={Portfolio} />
            <Route path={paths.search.path} component={searchComponent} />
            <Route
              path={paths.summary.path}
              component={(props) => <CoinPage {...props} />}
            />
          </Switch>
          <Footer setHeader={setHeader} id={id} />
        </MainApp>
      </ThemeProvider>
    </Router>
  );
}
