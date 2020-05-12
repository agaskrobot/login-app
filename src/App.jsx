import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Login } from "./containers/Login";
import { Dashboard } from "./containers/Dashboard";
import { useAuthDataContext } from "./components/AuthData";

export function App() {
  const { authData } = useAuthDataContext();

  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      {authData === false ? <Redirect from="/" to="/login" /> : null}
      {authData === true ? <Redirect from="/login" to="/" /> : null}
    </Router>
  );
}

export default App;
