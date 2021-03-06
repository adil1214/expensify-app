import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';
import Animate from './Animate';

const EditExpensePage = (props) => {
	return (
		<Animate>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
			</div>
			<div className="content-container">
				<ExpenseForm
					expenseToEdit={props.expense}
					onSubmit={(submittedExpense) => {
						props.dispatch(startEditExpense(props.expense.id, submittedExpense));
						props.history.push('/');
					}}
				/>
				<button
					className="button button__secondary"
					onClick={(e) => {
						props.dispatch(startRemoveExpense(props.expense.id, props.history));
					}}
				>
					Remove Expense
				</button>
			</div>
		</Animate>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((element) => element.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(withRouter(EditExpensePage));
