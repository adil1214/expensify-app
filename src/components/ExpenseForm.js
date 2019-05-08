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
			shouldConfirmNavigation: false,
			modalTitle: 'Are You Sure?',
			modalText: "By leaving the changes you've made will not be saved.",
			modalIcon: 'warning',
			modalButtons: {
				confirm: { text: 'Leave', value: true },
				cancel: 'Stay'
			}
		};
	}

	onDescriptionChange = (e) => {
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

	comparePropsWithState = () => {
		// if its adding a new expense, we rely on "shouldConfirmNavigation"
		if (!this.props.expenseToEdit) return true;
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
		return (
			<Fragment>
				<NavigationPrompt when={this.comparePropsWithState && this.state.shouldConfirmNavigation}>
					{({ isActive, onConfirm, onCancel }) => {
						if (isActive) {
							swal({
								title: this.state.modalTitle,
								text: this.state.modalText,
								icon: this.state.modalIcon,
								buttons: this.state.modalButtons,
								dangerMode: true,
								closeOnEsc: false,
								closeOnClickOutside: false
							}).then((confirmed) => {
								if (confirmed) {
									onConfirm();
								} else {
									onCancel();
								}
							});
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
						<button className="button">{this.props.expenseToEdit ? 'Edit Expense' : 'Add Expense'}</button>
					</div>
				</form>
			</Fragment>
		);
	}
}
