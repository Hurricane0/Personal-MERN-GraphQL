import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Phonebook from "./pages/Phonebook";
import NotFound from "./components/NotFound";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Layout from "./components/Layout";
import theme from "./components/theme";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Phonebook} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </MuiThemeProvider>
);

export default App;
