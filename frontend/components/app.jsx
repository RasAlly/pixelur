import React from 'react';
import SignUpContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute } from '../util/route_utils';

export default () => (
  <div>
    <AuthRoute path="/signup" component={SignUpContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);
