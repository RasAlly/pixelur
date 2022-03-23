import React from 'react';
import SignUpContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute } from '../util/route_utils';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home_page';

const App = () => {
  return (
    <>
      <Switch>
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/" component={HomePage}/>
      </Switch>
    </>
  ) 
};

export default App
