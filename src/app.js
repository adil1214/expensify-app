import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store1 = configureStore();

store1.subscribe(() => {
  // console.log(store.getState());
  const currentState = store1.getState();
  const visibleExpenses = getVisibleExpenses(currentState.expenses, currentState.filters);
  console.log(visibleExpenses);
});

store1.dispatch(addExpense({description: 'water bill', amount: 500, createdAt: 3500}));
store1.dispatch(addExpense({description: 'gas bill', amount: 700, createdAt: 900000}));
store1.dispatch(addExpense({description: 'electricity bill', amount: 900}));
store1.dispatch(addExpense({description: '4th week\'s food', amount: 350}));

store1.dispatch(setTextFilter('bill'));

setTimeout(() => {
  store1.dispatch(setTextFilter('water'));
}, 4000);


const jsx = (
  <Provider store={store1}>
    <AppRouter />
  </Provider>
);

let appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);