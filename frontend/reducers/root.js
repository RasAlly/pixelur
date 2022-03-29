import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import errorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';
import postsReducer from './posts_reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['posts', 'session', 'allPosts', 'currentPost'] 
}

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  posts: postsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;
