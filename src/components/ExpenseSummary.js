import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

class ExpenseSummary extends Component {
	render() {
		const { expensesCount, expensesTotal, allExpensesCardinal } = this.props;
		const expString = expensesCount === 1 ? 'expense' : 'expenses';
		const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');

		return (
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">
						Viewing <span>{`${expensesCount} / ${allExpensesCardinal}`} </span> {expString}, totaling{' '}
						<span>{formattedTotal}</span>
					</h1>
					<div className="page-header__actions">
						<Link className="button" to="/create">
							Add Expense
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	let visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	return {
		expensesCount: visibleExpenses.length,
		expensesTotal: expensesTotal(visibleExpenses),
		allExpensesCardinal: state.expenses.length
	};
};

export default connect(mapStateToProps)(ExpenseSummary);
