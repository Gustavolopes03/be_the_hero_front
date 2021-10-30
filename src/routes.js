import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Occurrences from "./pages/Occurrences";
import occRegistration from "./pages/OccRegistration";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/occ" exact component={Occurrences} />
        <Route path="/occ/register" exact component={occRegistration} />
      </Switch>
    </BrowserRouter>
  );
}
