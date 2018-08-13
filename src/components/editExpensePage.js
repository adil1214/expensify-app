import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { addExpense, editExpense, removeExpense } from './../actions/expenses';

const EditExpensePage = (props) => {
    // console.log(props);
    return (
        <div>
            <ExpenseForm
                expenseToEdit={props.expense}
                onSubmit={(submittedExpense) => {
                    console.log('updated: ',submittedExpense);
                    props.dispatch(editExpense(props.expense.id, submittedExpense));
                    props.history.push('/');
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((element) => element.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);