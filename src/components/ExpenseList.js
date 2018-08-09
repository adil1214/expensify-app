import React, { Component } from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    filter text : {props.filters.text}
    {props.expenses.map((a, b) => {
      return <p key={b}>{a.description}  :  {a.amount}</p>;
    } )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// the call to connect returns the higher order component (a function)
export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;