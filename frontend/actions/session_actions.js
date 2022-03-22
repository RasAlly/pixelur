import * as SessionApiUtil from "../util/session_api_util";
import { receiveErrors } from "./error_actions";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


// actions creators
const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

// thunk action creators

export const login = user => dispatch => {
  return SessionApiUtil.loginUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(error => {
     dispatch(receiveErrors(error));
      return error
    })
}

export const logout = () => dispatch => {
  return SessionApiUtil.logoutUser()
    .then(() => dispatch(logoutCurrentUser()))
    .catch(error => dispatch(receiveErrors(error)))
}

export const signup = user => dispatch => {
  return SessionApiUtil.signupNewUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(error => {
      dispatch(receiveErrors(error));
       return error
     })
}


