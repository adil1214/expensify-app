import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from './../selectors/expenses';


const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {/* {props.expenses.map((a, b) => {
      return <p key={b}>{a.description}  :  {a.amount}</p>;
    } )} */}
    {props.expenses.map((a, b) => {
      return <ExpenseListItem {...a} key={b}/> 
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
