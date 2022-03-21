import * as PostApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


// actions creators
const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// thunk action creators

export const login = user => dispatch => {
  return PostApiUtil.loginUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
  return PostApiUtil.logoutUser()
    .then(() => dispatch(logoutCurrentUser()))
}

export const signup = user => dispatch => {
  return PostApiUtil.signupNewUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

