import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  // console.log(store.getState());
  const currentState = store.getState();
  const visibleExpenses = getVisibleExpenses(currentState.expenses, currentState.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({description: 'water bill', amount: 500}));
store.dispatch(addExpense({description: 'gas bill', amount: 700}));
store.dispatch(addExpense({description: 'electricity bill', amount: 900}));
store.dispatch(addExpense({description: 'week4 food', amount: 350}));

store.dispatch(setTextFilter('bill'));


let appRoot = document.getElementById('app');
ReactDOM.render(<AppRouter />, appRoot);