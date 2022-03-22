import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullId = {
  currentUser: null
}

export const sessionReducer = (state = _nullId, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.currentUser = action.user
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullId;
    default:
      return state;
  }
}

export default sessionReducer;