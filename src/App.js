import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ConfirmProvider } from "material-ui-confirm";
import { CssBaseline } from "@material-ui/core";
import MainTemplate from "./Pages/Templates/MainTemplate";
import { MobileContext } from "./GlobalStates/stateManager";
import React from "react";
import { SnackbarProvider } from "notistack";
import routes from "./helpers/routes";
import theme from "./theme"
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMobile, setIsMobile] = React.useState(mediaQuery);

  return (
    <div className="App">
      <MobileContext.Provider value={isMobile}>
        <CssBaseline />
        <ConfirmProvider>
          <SnackbarProvider maxSnack={3}>
            <Router>
              <Switch>
                {routes.map((x) => (
                  <Route key="route" path={x[0]} exact>
                    {<MainTemplate>{x[1]}</MainTemplate>}
                  </Route>
                ))}
              </Switch>
            </Router>
          </SnackbarProvider>
        </ConfirmProvider>
      </MobileContext.Provider>
    </div>
  );
}

export default App;
