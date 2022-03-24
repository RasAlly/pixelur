import persistedReducer from '../reducers/root';
import { createStore, applyMiddleware } from 'redux';
import thunk from '../thunk/thunk';
import { persistStore } from 'redux-persist';
const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => createStore(
	persistedReducer, preloadedState, applyMiddleware(...middlewares)
);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export {store, persistor, configureStore};
