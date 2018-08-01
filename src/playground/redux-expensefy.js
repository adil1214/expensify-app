import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'dfjqsmlkvqscmjn',
    description: 'january rent',
    note: 'this was the final payement for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',  // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(expensesReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})