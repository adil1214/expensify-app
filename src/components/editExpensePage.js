import React from 'react';

const editExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the expense with id: {props.match.params.id}
        </div>
    );
};

export default editExpensePage;