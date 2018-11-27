import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expenseToEdit ? props.expenseToEdit.description : '',
      note: props.expenseToEdit ? props.expenseToEdit.note : '',
      amount: props.expenseToEdit ? (props.expenseToEdit.amount / 100).toString() : '',
      createdAt: props.expenseToEdit ? moment(props.expenseToEdit.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    // you cant use the variable straight in the callback, you need to pull it first.
    // or you can use e.persist()
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused });

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Description and Amount fields are required!' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus="true"
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
        >
        </textarea>

        <div>
          <button className="button">Add Expense</button>
        </div>
      </form>
    );
  }
}