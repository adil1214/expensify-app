import moment from 'moment';
import selectExpenses from './../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 150,
  createdAt: moment(0).add(4, 'd').valueOf()
}, {
  id: '2',
  description: 'Lunch',
  note: '',
  amount: 1800,
  createdAt: moment(0).subtract(2, 'd').valueOf()
}, {
  id: '3',
  description: 'rent',
  note: 'last month\'s rent',
  amount: 90000,
  createdAt: moment(0).add(9, 'd').valueOf()
}, {
  id: '4',
  description: 'Shopping',
  note: '',
  amount: 34000,
  createdAt: moment(0).add(7, 'd').valueOf()
},]

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2] ])
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(3, 'd'),
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[3], expenses[0] ]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).subtract(1, 'd')
  }

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1] ]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[3], expenses[0], expenses[1] ]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[3], expenses[1], expenses[0] ]);
});