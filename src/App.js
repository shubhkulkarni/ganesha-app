import { HashRouter } from "react-router-dom";
import "./App.css";

import Router from "./router/router";
import { NotificationContainer } from "react-notifications";
function App() {
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
