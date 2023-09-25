import { HashRouter } from "react-router-dom";
import "./App.css";

import Router from "./router/router";
import { NotificationContainer } from "react-notifications";
import React,{ useEffect } from "react";
import { useDataStore } from "./global/global";
export const DataContext = React.createContext();
function App() {
  useEffect(()=>{
    const date = new Date();
    document.title = `श्री टेंबे गणेशोत्सव ${date.getFullYear()}`
  },[]);
  const [state,actions] = useDataStore();
  return (
    <DataContext.Provider value={[state,actions]}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Router />
        <NotificationContainer />
      </div>
    </HashRouter>
    </DataContext.Provider>
  );
}

export default App;
