import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from './../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => {
  return <div>
    <p><b>description:</b><Link to={`/edit/${id}`}>{description}</Link><br/>
    <b>amount</b>:{amount}<br/>
    <b>created at</b>: {createdAt}<br/></p>
    <button onClick={(e) => {
      dispatch(removeExpense({id}));
    }}>Remove</button>
    <hr/>
  </div>;
};


export default connect()(ExpenseListItem);

