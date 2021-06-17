import React from "react";
import theme from "./theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <AppRouter />
      </MuiThemeProvider>
    </>
  );
}

export default App;
