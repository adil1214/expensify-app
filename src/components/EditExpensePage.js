import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from './../actions/expenses';

const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm
				expenseToEdit={props.expense}
				onSubmit={(submittedExpense) => {
					props.dispatch(editExpense(props.expense.id, submittedExpense));
					props.history.push('/');
				}}
			/>
			<button onClick={(e) => {
				props.dispatch(removeExpense({id: props.expense.id}));
				props.history.push('/');
			}}>Remove</button>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((element) => element.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditExpensePage);
