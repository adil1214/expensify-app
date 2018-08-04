import { createStore, combineReducers } from 'redux';
import uuidv1 from 'uuid/v1';

// ADD_EXPENSE
const addExpense = (
    { 
      description = '', 
      note = '', 
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv1(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = [];

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

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

// Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter( ({ id }) => action.id !== id );
    default:
      return state;
  }
};

// Filters reducer
const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'coffee', amount: 200 }));
const expenseTwo = store.dispatch(addExpense({ description: 'rent', amount: 60000 }));

// console.log(expenseOne.expense.id);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
