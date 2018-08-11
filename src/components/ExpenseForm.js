import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

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
    if ( amount.match(/^\d*(\.\d{0,2})?$/) ) {
      this.setState(() => ({ amount }))
    }
  }

  render() {
    return (
      <div>
        <form action="">
          <input 
            type="text"
            placeholder="description"
            autoFocus="true"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
            <button>Add Expense</button>
        </form>
      </div>
    );
  }
}