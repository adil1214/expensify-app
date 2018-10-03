import expensesTotal from './../../selectors/expenses-total';
import moment from 'moment';

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

test('should return 0 if no expenses (empty array)', () => {
  let sum = expensesTotal([]);
  expect(sum).toBe(0);
});

test('should add up a single expense', () => {
  let sum = expensesTotal(expenses[0]);
  expect(sum).toBe(150);
});

// total is 34000 + 90000 + 1800 + 150 = 125950
test('should return the sum of an array of expenses', () => {
  let sum = expensesTotal(expenses);
  expect(sum).toBe(125950);
});
