import { addExpense, editExpense, removeExpense } from './../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense aciton object', () => {
  const expense = editExpense('abc456', { food: true });
  expect(expense).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc456',
    updates: { food: true }
  })
});


test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last mont\'s rent',
    amount: 199700,
    createdAt: 1000
  };

  const action = addExpense(expenseData);
  // first solution:
  // expect(action).toMatchObject({
  //   type: 'ADD_EXPENSE',
  //   expense: expenseData
  // })

  // 2nd sol:
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE', 
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});