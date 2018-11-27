import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './../actions/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class ExpenseListFilters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			focusedInput: null
		};
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = (focusedInput) => {
		this.setState(() => ({ focusedInput }));
	};

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
              className="text-input"
              placeholder="Search expenses"
							value={this.props.filters.text}
							onChange={(e) => {
								this.props.dispatch(setTextFilter(e.target.value));
							}}
						/>
					</div>
					<div className="input-group__item">
						<select
              className="select"
							value={this.props.filters.sortBy}
							onChange={(e) => {
								if (e.target.value === 'date') {
									this.props.dispatch(sortByDate());
								} else if (e.target.value === 'amount') {
									this.props.dispatch(sortByAmount());
								}
							}}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
							startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
							endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
							endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
							onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
							focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
							onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
							isOutsideRange={(day) => false}
							numberOfMonths={1}
							showClearDates={true}
						/>
					</div>
				</div>
			</div>
		);
	}
}

// const ExpenseListFilters = (props) => (

// );

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
