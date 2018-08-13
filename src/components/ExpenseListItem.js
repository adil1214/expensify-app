import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt, note}) => {
  return <div>
    <p><b>description:</b><Link to={`/edit/${id}`}>{description}</Link><br/>
    <b>amount:</b>{amount}<br/>
    <b>created at</b>: {createdAt}<br/>
    <b>note:</b> {note}<br/></p>
    <hr/>
  </div>;
};

export default ExpenseListItem;

