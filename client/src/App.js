import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [fireBaseTest, setFireBaseTest] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  useEffect(() => {
    const initialfetch = async () => {
      const tt = await fetch("/api/hello/read").then((res) => res.json());

      // await fetch("/api/hello/read").then((res) => setFireBaseTest(res.id));
      console.log(tt);
      setFireBaseTest(tt[0].id);
      return tt;
    };
    initialfetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!fireBaseTest ? "Loading from firebase..." : fireBaseTest}</p>
      </header>
    </div>
  );
}

export default App;
