import React from 'react';
import SignUpContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute } from '../util/route_utils';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <AuthRoute path="/signup" component={SignUpContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App
