import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt, note}) => {
  return <div>
    <p><b>description:</b><Link to={`/edit/${id}`}>{description}</Link><br/>
    <b>amount: </b>{numeral(amount/100).format('$0,0.00')}<br/>
    {/* <b>created at</b>: {createdAt}<br/> */}
    <b>normal date</b>: {moment(createdAt).format('YYYY-MM-DD')}<br/>
    <b>note:</b> {note}<br/></p>
    <hr/>
  </div>;
};

export default ExpenseListItem;

