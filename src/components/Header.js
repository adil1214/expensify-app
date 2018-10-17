import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
	<header>
		<h1>Expensify</h1>
		<br />
		<NavLink activeClassName="is-active" to="/dashboard">
			Dashboard
		</NavLink>
		<br />
		<NavLink activeClassName="is-active" to="/create">
			create expense
		</NavLink>
		<br />
		<NavLink activeClassName="is-active" to="/help">
			welp
		</NavLink>
		<br />
		<button onClick={startLogout}>Logout</button>
		<p>___________________________________</p>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
