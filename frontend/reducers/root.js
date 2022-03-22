import { combineReducers } from 'redux';
import errorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
