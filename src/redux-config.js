import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import promise from 'redux-promise';
import {routerMiddleware} from 'react-router-redux';


export default function configureStore(history, initialState = {}) {
	const router = routerMiddleware(history);
	const logger = createLogger({
		collapsed: true
	});

	let middleware;
	if (process.env.NODE_ENV === 'production') {
		middleware = applyMiddleware(thunk, promise, router);
	} else {
		middleware = applyMiddleware(thunk, promise, logger, router);
	}

	return createStore(
		rootReducer,
		initialState,
		middleware
	);
}