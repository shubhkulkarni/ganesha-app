import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Router from "./router/router";
import { NotificationContainer } from "react-notifications";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Router />
        <NotificationContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
