import { HashRouter } from "react-router-dom";
import "./App.css";

import Router from "./router/router";
import { NotificationContainer } from "react-notifications";
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    const date = new Date();
    document.title = `श्री टेंबे गणेशोत्सव ${date.getFullYear()}`
  },[]);
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Router />
        <NotificationContainer />
      </div>
    </HashRouter>
  );
}

export default App;
