import React, { Component, Fragment } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import NavigationPrompt from 'react-router-navigation-prompt';
import swal from 'sweetalert';

export default class ExpenseForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.expenseToEdit ? props.expenseToEdit.description : '',
			note: props.expenseToEdit ? props.expenseToEdit.note : '',
			amount: props.expenseToEdit ? (props.expenseToEdit.amount / 100).toString() : '',
			createdAt: props.expenseToEdit ? moment(props.expenseToEdit.createdAt) : moment(),
			calendarFocused: false,
			error: '',
			shouldConfirmNavigation: false
		};
	}

	onDescriptionChange = (e) => {
		// you cant use the variable straight in the callback, you need to pull it first.
		// or you can use e.persist()
		const description = e.target.value;
		this.setState(() => ({ description, shouldConfirmNavigation: description.length > 0 }));
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note, shouldConfirmNavigation: note.length > 0 }));
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount, shouldConfirmNavigation: amount.length > 0 }));
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState({ createdAt, shouldConfirmNavigation: true });
		}
	};

	onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused });

	// FIXME: 1 i broke adding expense,
	//        2 should be able to leave page when submitting form
	comparePropsWithState = () => {
		if (
			!this.props.expenseToEdit // if its adding a new expense, we rely on "shouldConfirmNavigation"
		)
			return true;
		const test =
			this.props.expenseToEdit.description != this.state.description ||
			this.props.expenseToEdit.note != this.state.note ||
			(this.props.expenseToEdit.amount / 100).toString() != this.state.amount ||
			!moment(this.props.expenseToEdit.createdAt).isSame(this.state.createdAt, 'day');
		return test;
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: 'Description and Amount fields are required!' }));
		} else {
			// setState callback function to wait for shouldConfirmNavigation to change first
			this.setState({ error: '', shouldConfirmNavigation: false }, () => {
				this.props.onSubmit({
					description: this.state.description,
					amount: parseFloat(this.state.amount) * 100,
					createdAt: this.state.createdAt.valueOf(),
					note: this.state.note
				});
			});
		}
	};

	render() {
		// console.log('add or edit ? ', this.props.expenseToEdit);
		return (
			<Fragment>
				<NavigationPrompt when={this.comparePropsWithState && this.state.shouldConfirmNavigation}>
					{({ onConfirm, onCancel }) => {
						if (window.confirm('are you sure you wanna leave?')) {
							onConfirm();
						} else {
							console.log("you're still here");
							onCancel();
						}
					}}
				</NavigationPrompt>

				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input
						type="text"
						className="text-input"
						placeholder="Description"
						autoFocus={true}
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>

					<input
						type="text"
						className="text-input"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>

					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={(day) => false}
					/>

					<textarea
						placeholder="add a note for your expense (optional)"
						className="textarea"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>

					<div>
						<button className="button">Add Expense</button>
					</div>
				</form>
			</Fragment>
		);
	}
}
