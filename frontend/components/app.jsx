import React from 'react';
import SignUpContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home_page';
import Upload from './upload/upload';
import PostEditContainer from './posts/post_edit_container';

const App = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute path="/post/:id/edit" component={PostEditContainer}/>
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <ProtectedRoute path="/upload" component={Upload}/> 
        <Route path="/" component={HomePage}/> 
      </Switch>
    </>
  ) 
};

export default App
