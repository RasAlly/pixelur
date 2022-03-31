import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.user.id] = action.user
      return nextState;
    case RECEIVE_USER: 
      return action.user
    default:
      return state;
  }
}

export default usersReducer