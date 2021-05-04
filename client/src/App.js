import React, { useState, useEffect } from "react";
import theme from "./theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import WebSite from "./Components/WebSite";
import GlobalStyles from "./GlobalStyles";

function App() {
  // eslint-disable-next-line
  const [data, setData] = useState(null);
  const [fireBaseTest, setFireBaseTest] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  useEffect(() => {
    const initialfetch = async () => {
      const fetchData = await fetch("/api/hello/read").then((res) =>
        res.json()
      );
      setFireBaseTest(fetchData[0].id);
    };
    initialfetch();
  }, []);

  console.log(fireBaseTest);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <WebSite />
      </MuiThemeProvider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!fireBaseTest ? "Loading from firebase..." : fireBaseTest}</p>
      </header> */}
    </>
  );
}

export default App;