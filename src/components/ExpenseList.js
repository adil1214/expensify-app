import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from './../selectors/expenses';
import { addExpense, editExpense, removeExpense } from './../actions/expenses';


// convert this into a class based component and pass down an event handler 
// function that accepts a parameter(the bill to delete ) ???

// const ExpenseList = (props) => (
//   <div>
//     <h1>Expense List</h1>
//     {props.expenses.map((a, b) => {
//       return <ExpenseListItem {...a} key={b} dispatchFunc={props.dispatch} /> 
//     })}
//   </div>
// );

class ExpenseList extends Component {
  constructor(props) {
    super(props);

    // this.dispatchFunc = this.dispatchFunc.bind(this);
  }

  // dispatchFunc(id) {
  //   console.log(`expense with id ${id} should be removed `); 
  //   // console.log(`type of id: ${typeof id} `);
  //   this.props.dispatch(removeExpense(id));
  // }

  render() {
    return (
        <div>
          <h1>Expense List</h1>
          {this.props.expenses.map((a, b) => {
            return <ExpenseListItem key={b} dispatchFunc={this.props.dispatch} {...a} /> 
          })}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

// the call to connect returns the higher order component (a function)
export default connect(mapStateToProps)(ExpenseList);
