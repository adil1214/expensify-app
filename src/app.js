import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {startSetExpenses} from './actions/expenses';
// import './firebase/firebase';

const store1 = configureStore();

const jsx = (
	<Provider store={store1}>
		<AppRouter />
	</Provider>
);

let appRoot = document.getElementById('app');

ReactDOM.render(<p>Loading...</p>, appRoot);

store1.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, appRoot);
});