import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1><br/>
        <NavLink activeClassName="is-active" to="/" exact>Dashboard</NavLink><br/>
        <NavLink activeClassName="is-active" to="/create">create expense</NavLink><br/>
        <NavLink activeClassName="is-active" to="/help">welp</NavLink><br/>
        <p>___________________________________</p>
    </header>
);

export default Header;