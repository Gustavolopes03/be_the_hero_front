import React from "react";
import { Route, Switch, BrowserRouter  } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' exact component={Register} />
            </Switch>
        </BrowserRouter>
    )
}
