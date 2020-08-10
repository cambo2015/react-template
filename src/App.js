import "./App.css";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import MainTemplate from "./Pages/Templates/MainTemplate";
import React from "react";
import Signin from "./Pages/Signin";
import routes from "./helpers/routes";

function App() {
  return (
    <div className="App">
     
       <CssBaseline />
      <Router>
        <Switch>
          {routes.map((x) => (
            <Route key="route" path={x[0]} exact>
              {<MainTemplate>
               { x[1]}
                </MainTemplate>}
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
