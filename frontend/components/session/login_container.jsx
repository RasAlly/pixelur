import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
