import React from 'react';

export default ({description, amount, createdAt}) => {
  return <div>
    <p><b>description:</b> {description}<br/>
    <b>amount</b>:{amount}<br/>
    <b>created at</b>: {createdAt}<br/></p>
            <hr/>
  </div>;
};

