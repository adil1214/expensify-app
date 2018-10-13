import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import expensesReducer from './../reducers/expenses';
import filtersReducer from './../reducers/filters';

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),
		composeWithDevTools(applyMiddleware(thunk, logger))
	);

	return store;
};
