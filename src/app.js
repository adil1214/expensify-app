import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

const store1 = configureStore();

const jsx = (
	<Provider store={store1}>
		<AppRouter />
	</Provider>
);

let appRoot = document.getElementById('app');
ReactDOM.render(<LoadingPage />, appRoot);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, appRoot);
		hasRendered = true;
	}
};

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		console.log('logged in\n');
		store1.dispatch(login(user.uid));
		store1.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === '/');
			history.push('/dashboard');
		});
	} else {
		renderApp();
		console.log('logged out');
		store1.dispatch(logout());
		history.push('/');
	}
});
