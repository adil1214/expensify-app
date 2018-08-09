import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// stateless functional component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

// higher order component (returns a component(stateless or class-based))
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info Please don't share!.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="yes or no, it doesnt matter"/>, document.getElementById('app')); 