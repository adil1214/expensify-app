import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

class ExpenseSummary extends Component {
	render() {
    const expString = this.props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(this.props.expensesTotal/100).format('$0,0.00');
		return (
			<div>
				<h2>Viewing {this.props.expensesCount} {expString}, totaling {formattedTotal}</h2>
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
