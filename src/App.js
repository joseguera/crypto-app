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
  const searchPage = search && "/search";
  const searchComponent = search ? SearchMobile : Home;
  const [id, setId] = useState("home")
  const [paths, setPaths] = useState({
    home: { clicked: true, path: "/", header: "Overview" },
    portfolio: { clicked: true, path: "/portfolio", header: "Portfolio" },
    summary: { clicked: true, path: "/coin/:id", header: "Summary" },
    search: { clicked: true, path: "/search", header: "✖ Close" },
  });

  const setHeader = (id) => {
    (id !== 'undefined') && setId(id)
  }

  const setPagePath = (id) => {
    console.log(id)
  }

  console.log(search)

  return (
    <Router>
      <ThemeProvider theme={themeColor}>
        <GlobalStyles />
        <MainApp>
          <NavBar paths={paths} id={id} />
          <Switch>
            <Route exact path={paths.home.path} component={(props) => <Home {...props} />} />
            <Route path={paths.portfolio.path} component={Portfolio} />
            <Route path={paths.search.path} component={SearchMobile} />
            <Route
              path={paths.summary.path}
              component={(props) => <CoinPage {...props} />}
            />
          </Switch>
          <Footer setHeader={setHeader} setPagePath={setPagePath} />
        </MainApp>
      </ThemeProvider>
    </Router>
  );
}
