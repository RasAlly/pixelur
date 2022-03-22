import { combineReducers } from 'redux';
import errorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';
import postsReducer from './posts_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  posts: postsReducer
});

export default rootReducer;
