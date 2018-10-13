import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense, editExpense, removeExpense } from './../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        This is from my <strong>add expense</strong> component.
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);
