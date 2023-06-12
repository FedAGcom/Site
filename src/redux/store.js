import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];
const composedEnhancers = compose(applyMiddleware(...middlewares))

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const store = createStore(rootReducer, composedEnhancers)
export default store;