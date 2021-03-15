import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { OrderForm    
        } from '../screens';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Redirect to="/orderform" />
        </Route>
        <Route initial path="/orderform">
          <OrderForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes;