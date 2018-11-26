import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

class ExpenseSummary extends Component {
	render() {
		const expString = this.props.expensesCount === 1 ? 'expense' : 'expenses';
		const formattedTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
		return (
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">
						Viewing <span>{this.props.expensesCount}</span> {expString}, totaling <span>{formattedTotal}</span>
					</h1>
					<div className="page-header__actions">
						<Link className="button" to="/create">Add Expense</Link>
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
		expensesTotal: expensesTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpenseSummary);
