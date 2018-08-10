import React from 'react';
// import { connect } from 'react-redux';
import { addExpense, editExpense, removeExpense } from './../actions/expenses';

export default ({id, description, amount, createdAt, dispatchFunc}) => {
  return <div>
    <p><b>description:</b> {description}<br/>
    <b>amount</b>:{amount}<br/>
    <b>created at</b>: {createdAt}<br/></p>
    <button onClick={(e) => {
      dispatchFunc(removeExpense({id}));
      console.log(`expense with id ${id} should be removed `); 
    }}>Remove</button>
    <hr/>
  </div>;
};

