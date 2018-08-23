import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import moment from 'moment';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store1 = configureStore();

const jsx = (
  <Provider store={store1}>
    <AppRouter />
  </Provider>
);

let appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);