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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});

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

const expensesReducerDefaultState = [];

// Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// Filters reducer
const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

// getVisibleExpenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    let startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
    let endDateMatch = typeof startDate !== 'number' || endDate >= expense.createdAt;
    let textMatch;// = (text == expense.description);

    textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {              // btw there is no sort by description -_-
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;    // newest to oldest
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;          // highest to lowest price
    }
  });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// ================================== //

store.dispatch(addExpense({ description: 'march rent', amount: 80000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'april Rent', amount: 70000, createdAt: 50000 }));
store.dispatch(addExpense({ description: 'December Rent', amount: 60000, createdAt: 90000 }));
store.dispatch(addExpense({ description: 'coffee', amount: 200, createdAt: -2500 }));

store.dispatch(sortByAmount());


// store.dispatch(setTextFilter('rent'));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setEndDate(456));
// store.dispatch(setStartDate());