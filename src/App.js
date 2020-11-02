import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Header } from "components/Header";
import { Home } from "pages/Home";
import { MyProfile } from "pages/MyProfile";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { GlobalStyle, theme } from "./styles";

export const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/my-profile">
          <Header />
          <MyProfile />
        </Route>
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  </Router>
);
