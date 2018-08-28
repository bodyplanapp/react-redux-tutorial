import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import LoginView from './views/login-view/login-view.component'

const AppRoutes = () =>
  <App>
    <Switch>
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/library" component={Library} />
      <Route exact path="/library/:id" component={Library} /> */}
      <Route exact path="/login" component={LoginView} />
      {/* <Route component={Page404} /> */}
    </Switch>
  </App>;

export default AppRoutes;