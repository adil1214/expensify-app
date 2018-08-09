import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from './../selectors/expenses';
import { addExpense, editExpense, removeExpense } from './../actions/expenses';


// convert this into a class based component and pass down an event handler 
// function that accepts a parameter(the bill to delete ) ???
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((a, b) => {
      return <ExpenseListItem {...a} key={b} dispatchFunc={props.dispatch} /> 
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

// the call to connect returns the higher order component (a function)
export default connect(mapStateToProps)(ExpenseList);
